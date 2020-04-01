var WorkerGlobalScope;
var _self =
  typeof window !== "undefined"
    ? window // if in browser
    : typeof WorkerGlobalScope !== "undefined" &&
      window.self instanceof WorkerGlobalScope
    ? window.self // if in worker
    : {}; // if in node js

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function(_self) {
  // Private helper vars
  var lang = /\blang(?:uage)?-([\w-]+)\b/i;
  var uniqueId = 0;

  var _ = {
    manual: _self.Prism && _self.Prism.manual,
    disableWorkerMessageHandler:
      _self.Prism && _self.Prism.disableWorkerMessageHandler,
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/\u00a0/g, " ");
        }
      },

      type: function(o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },

      objId: function(obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", { value: ++uniqueId });
        }
        return obj["__id"];
      },

      // Deep clone a language definition (e.g. to extend it)
      clone: function deepClone(o, visited) {
        var clone,
          id,
          type = _.util.type(o);
        visited = visited || {};

        switch (type) {
          case "Object":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = {};
            visited[id] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }

            return clone;

          case "Array":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = [];
            visited[id] = clone;

            o.forEach(function(v, i) {
              clone[i] = deepClone(v, visited);
            });

            return clone;

          default:
            return o;
        }
      },

      /**
       * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
       *
       * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
       *
       * @param {Element} element
       * @returns {string}
       */
      getLanguage: function(element) {
        while (element && !lang.test(element.className)) {
          element = element.parentElement;
        }
        if (element) {
          return (element.className.match(lang) || [, "none"])[1].toLowerCase();
        }
        return "none";
      },

      /**
       * Returns the script element that is currently executing.
       *
       * This does __not__ work for line script element.
       *
       * @returns {HTMLScriptElement | null}
       */
      currentScript: function() {
        if (typeof document === "undefined") {
          return null;
        }
        if ("currentScript" in document) {
          return document.currentScript;
        }

        // IE11 workaround
        // we'll get the src of the current script by parsing IE11's error stack trace
        // this will not work for inline scripts

        try {
          throw new Error();
        } catch (err) {
          // Get file src url from stack. Specifically works with the format of stack traces in IE.
          // A stack will look like this:
          //
          // Error
          //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
          //    at Global code (http://localhost/components/prism-core.js:606:1)

          var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
          if (src) {
            var scripts = document.getElementsByTagName("script");
            for (var i in scripts) {
              if (scripts[i].src == src) {
                return scripts[i];
              }
            }
          }
          return null;
        }
      }
    },

    languages: {
      extend: function(id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need an object and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function(inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];
        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            // Do not insert token which also occur in insert. See #1525
            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }

        var old = root[inside];
        root[inside] = ret;

        // Update references in other language definitions
        _.languages.DFS(_.languages, function(key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });

        return ret;
      },

      // Traverse a language definition with Depth First Search
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};

        var objId = _.util.objId;

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            var property = o[i],
              propertyType = _.util.type(property);

            if (propertyType === "Object" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === "Array" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},

    highlightAll: function(async, callback) {
      _.highlightAllUnder(document, async, callback);
    },

    highlightAllUnder: function(container, async, callback) {
      var env = {
        callback: callback,
        container: container,
        selector:
          'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
      };

      _.hooks.run("before-highlightall", env);

      env.elements = Array.prototype.slice.apply(
        env.container.querySelectorAll(env.selector)
      );

      _.hooks.run("before-all-elements-highlight", env);

      for (var i = 0, element; (element = env.elements[i++]); ) {
        _.highlightElement(element, async === true, env.callback);
      }
    },

    highlightElement: function(element, async, callback) {
      // Find language
      var language = _.util.getLanguage(element);
      var grammar = _.languages[language];

      // Set language on the element, if not present
      element.className =
        element.className.replace(lang, "").replace(/\s+/g, " ") +
        " language-" +
        language;

      // Set language on the parent, for styling
      var parent = element.parentNode;
      if (parent && parent.nodeName.toLowerCase() === "pre") {
        parent.className =
          parent.className.replace(lang, "").replace(/\s+/g, " ") +
          " language-" +
          language;
      }

      var code = element.textContent;

      var env = {
        element: element,
        language: language,
        grammar: grammar,
        code: code
      };

      function insertHighlightedCode(highlightedCode) {
        env.highlightedCode = highlightedCode;

        _.hooks.run("before-insert", env);

        env.element.innerHTML = env.highlightedCode;

        _.hooks.run("after-highlight", env);
        _.hooks.run("complete", env);
        callback && callback.call(env.element);
      }

      _.hooks.run("before-sanity-check", env);

      if (!env.code) {
        _.hooks.run("complete", env);
        callback && callback.call(env.element);
        return;
      }

      _.hooks.run("before-highlight", env);

      if (!env.grammar) {
        insertHighlightedCode(_.util.encode(env.code));
        return;
      }

      if (async && _self.Worker) {
        var worker = new Worker(_.filename);

        worker.onmessage = function(evt) {
          insertHighlightedCode(evt.data);
        };

        worker.postMessage(
          JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          })
        );
      } else {
        insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
      }
    },

    highlight: function(text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };
      _.hooks.run("before-tokenize", env);
      env.tokens = _.tokenize(env.code, env.grammar);
      _.hooks.run("after-tokenize", env);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },

    tokenize: function(text, grammar) {
      var rest = grammar.rest;
      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);

      matchGrammar(text, tokenList, grammar, tokenList.head, 0);

      return toArray(tokenList);
    },

    hooks: {
      all: {},

      add: function(name, callback) {
        var hooks = _.hooks.all;

        hooks[name] = hooks[name] || [];

        hooks[name].push(callback);
      },

      run: function(name, env) {
        var callbacks = _.hooks.all[name];

        if (!callbacks || !callbacks.length) {
          return;
        }

        for (var i = 0, callback; (callback = callbacks[i++]); ) {
          callback(env);
        }
      }
    },

    Token: Token
  };

  _self.Prism = _;

  function Token(type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias;
    // Copy of the full string this token was created from
    this.length = (matchedStr || "").length | 0;
    this.greedy = !!greedy;
  }

  Token.stringify = function stringify(o, language) {
    if (typeof o == "string") {
      return o;
    }
    if (Array.isArray(o)) {
      var s = "";
      o.forEach(function(e) {
        s += stringify(e, language);
      });
      return s;
    }

    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language: language
    };

    var aliases = o.alias;
    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }

    _.hooks.run("wrap", env);

    var attributes = "";
    for (var name in env.attributes) {
      attributes +=
        " " +
        name +
        '="' +
        (env.attributes[name] || "").replace(/"/g, "&quot;") +
        '"';
    }

    return (
      "<" +
      env.tag +
      ' class="' +
      env.classes.join(" ") +
      '"' +
      attributes +
      ">" +
      env.content +
      "</" +
      env.tag +
      ">"
    );
  };

  /**
   * @param {string} text
   * @param {LinkedList<string | Token>} tokenList
   * @param {any} grammar
   * @param {LinkedListNode<string | Token>} startNode
   * @param {number} startPos
   * @param {boolean} [oneshot=false]
   * @param {string} [target]
   */
  function matchGrammar(
    text,
    tokenList,
    grammar,
    startNode,
    startPos,
    oneshot,
    target
  ) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }

      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];

      for (var j = 0; j < patterns.length; ++j) {
        if (target && target == token + "," + j) {
          return;
        }

        var pattern = patterns[j],
          inside = pattern.inside,
          lookbehind = !!pattern.lookbehind,
          greedy = !!pattern.greedy,
          lookbehindLength = 0,
          alias = pattern.alias;

        if (greedy && !pattern.pattern.global) {
          // Without the global flag, lastIndex won't work
          var flags = pattern.pattern.toString().match(/[imsuy]*$/)[0];
          pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
        }

        pattern = pattern.pattern || pattern;

        for (
          // iterate the token list and keep track of the current token/string position
          var currentNode = startNode.next, pos = startPos;
          currentNode !== tokenList.tail;
          pos += currentNode.value.length, currentNode = currentNode.next
        ) {
          var str = currentNode.value;

          if (tokenList.length > text.length) {
            // Something went terribly wrong, ABORT, ABORT!
            return;
          }

          if (str instanceof Token) {
            continue;
          }

          var removeCount = 1; // this is the to parameter of removeBetween

          if (greedy && currentNode != tokenList.tail.prev) {
            pattern.lastIndex = pos;
            var match = pattern.exec(text);
            if (!match) {
              break;
            }

            var from =
              match.index + (lookbehind && match[1] ? match[1].length : 0);
            var to = match.index + match[0].length;
            var p = pos;

            // find the node that contains the match
            p += currentNode.value.length;
            while (from >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            }
            // adjust pos (and p)
            p -= currentNode.value.length;
            pos = p;

            // the current node is a Token, then the match starts inside another Token, which is invalid
            if (currentNode.value instanceof Token) {
              continue;
            }

            // find the last node which is affected by this match
            for (
              var k = currentNode;
              k !== tokenList.tail &&
              (p < to || (typeof k.value === "string" && !k.prev.value.greedy));
              k = k.next
            ) {
              removeCount++;
              p += k.value.length;
            }
            removeCount--;

            // replace with the new match
            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            pattern.lastIndex = 0;

            var match = pattern.exec(str);
          }

          if (!match) {
            if (oneshot) {
              break;
            }

            continue;
          }

          if (lookbehind) {
            lookbehindLength = match[1] ? match[1].length : 0;
          }

          var from = match.index + lookbehindLength,
            match = match[0].slice(lookbehindLength),
            to = from + match.length,
            before = str.slice(0, from),
            after = str.slice(to);

          var removeFrom = currentNode.prev;

          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }

          removeRange(tokenList, removeFrom, removeCount);

          var wrapped = new Token(
            token,
            inside ? _.tokenize(match, inside) : match,
            alias,
            match,
            greedy
          );
          currentNode = addAfter(tokenList, removeFrom, wrapped);

          if (after) {
            addAfter(tokenList, currentNode, after);
          }

          if (removeCount > 1)
            matchGrammar(
              text,
              tokenList,
              grammar,
              currentNode.prev,
              pos,
              true,
              token + "," + j
            );

          if (oneshot) break;
        }
      }
    }
  }

  /**
   * @typedef LinkedListNode
   * @property {T} value
   * @property {LinkedListNode<T> | null} prev The previous node.
   * @property {LinkedListNode<T> | null} next The next node.
   * @template T
   */

  /**
   * @template T
   */
  function LinkedList() {
    /** @type {LinkedListNode<T>} */
    var head = { value: null, prev: null, next: null };
    /** @type {LinkedListNode<T>} */
    var tail = { value: null, prev: head, next: null };
    head.next = tail;

    /** @type {LinkedListNode<T>} */
    this.head = head;
    /** @type {LinkedListNode<T>} */
    this.tail = tail;
    this.length = 0;
  }

  /**
   * Adds a new node with the given value to the list.
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {T} value
   * @returns {LinkedListNode<T>} The added node.
   * @template T
   */
  function addAfter(list, node, value) {
    // assumes that node != list.tail && values.length >= 0
    var next = node.next;

    var newNode = { value: value, prev: node, next: next };
    node.next = newNode;
    next.prev = newNode;
    list.length++;

    return newNode;
  }
  /**
   * Removes `count` nodes after the given node. The given node will not be removed.
   * @param {LinkedList<T>} list
   * @param {LinkedListNode<T>} node
   * @param {number} count
   * @template T
   */
  function removeRange(list, node, count) {
    var next = node.next;
    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }
    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  /**
   * @param {LinkedList<T>} list
   * @returns {T[]}
   * @template T
   */
  function toArray(list) {
    var array = [];
    var node = list.head.next;
    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }

  if (!_self.document) {
    if (!_self.addEventListener) {
      // in Node.js
      return _;
    }

    if (!_.disableWorkerMessageHandler) {
      // In worker
      _self.addEventListener(
        "message",
        function(evt) {
          var message = JSON.parse(evt.data),
            lang = message.language,
            code = message.code,
            immediateClose = message.immediateClose;

          _self.postMessage(_.highlight(code, _.languages[lang], lang));
          if (immediateClose) {
            _self.close();
          }
        },
        false
      );
    }

    return _;
  }

  //Get current script and highlight
  var script = _.util.currentScript();

  if (script) {
    _.filename = script.src;

    if (script.hasAttribute("data-manual")) {
      _.manual = true;
    }
  }

  function highlightAutomaticallyCallback() {
    if (!_.manual) {
      _.highlightAll();
    }
  }

  if (!_.manual) {
    // If the document state is "loading", then we'll use DOMContentLoaded.
    // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
    // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
    // might take longer one animation frame to execute which can create a race condition where only some plugins have
    // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
    // See https://github.com/PrismJS/prism/issues/2102
    var readyState = document.readyState;
    if (
      readyState === "loading" ||
      (readyState === "interactive" && script && script.defer)
    ) {
      document.addEventListener(
        "DOMContentLoaded",
        highlightAutomaticallyCallback
      );
    } else {
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(highlightAutomaticallyCallback);
      } else {
        window.setTimeout(highlightAutomaticallyCallback, 16);
      }
    }
  }

  return _;
})(_self);

if (typeof module !== "undefined" && module.exports) {
  module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof global !== "undefined") {
  global.Prism = Prism;
}
Prism.languages.markup = {
  comment: /<!--[\s\S]*?-->/,
  prolog: /<\?[\s\S]+?\?>/,
  doctype: {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,
    greedy: true
  },
  cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
  tag: {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: true,
    inside: {
      tag: {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          punctuation: /^<\/?/,
          namespace: /^[^\s>\/:]+:/
        }
      },
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          punctuation: [
            /^=/,
            {
              pattern: /^(\s*)["']|["']$/,
              lookbehind: true
            }
          ]
        }
      },
      punctuation: /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          namespace: /^[^\s>\/:]+:/
        }
      }
    }
  },
  entity: /&#?[\da-z]{1,8};/i
};

Prism.languages.markup["tag"].inside["attr-value"].inside["entity"] =
  Prism.languages.markup["entity"];

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add("wrap", function(env) {
  if (env.type === "entity") {
    env.attributes["title"] = env.content.replace(/&amp;/, "&");
  }
});

Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside["language-" + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;

    var inside = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside["language-" + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };

    var def = {};
    def[tagName] = {
      pattern: RegExp(
        /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
          /__/g,
          function() {
            return tagName;
          }
        ),
        "i"
      ),
      lookbehind: true,
      greedy: true,
      inside: inside
    };

    Prism.languages.insertBefore("markup", "cdata", def);
  }
});

Prism.languages.xml = Prism.languages.extend("markup", {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

(function(Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;

  Prism.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        rule: /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\((?!\s*\))\s*)(?:[^()]|\((?:[^()]|\([^()]*\))*\))+?(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        }
        // See rest below
      }
    },
    url: {
      pattern: RegExp("url\\((?:" + string.source + "|[^\n\r()]*)\\)", "i"),
      greedy: true,
      inside: {
        function: /^url/i,
        punctuation: /^\(|\)$/
      }
    },
    selector: RegExp(
      "[^{}\\s](?:[^{};\"']|" + string.source + ")*?(?=\\s*\\{)"
    ),
    string: {
      pattern: string,
      greedy: true
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:,]/
  };

  Prism.languages.css["atrule"].inside.rest = Prism.languages.css;

  var markup = Prism.languages.markup;
  if (markup) {
    markup.tag.addInlined("style", "css");

    Prism.languages.insertBefore(
      "inside",
      "attr-value",
      {
        "style-attr": {
          pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
          inside: {
            "attr-name": {
              pattern: /^\s*style/i,
              inside: markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
              pattern: /.+/i,
              inside: Prism.languages.css
            }
          },
          alias: "language-css"
        }
      },
      markup.tag
    );
  }
})(Prism);

Prism.languages.clike = {
  comment: [
    {
      pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
      lookbehind: true
    },
    {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true,
      greedy: true
    }
  ],
  string: {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/
    }
  },
  keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  boolean: /\b(?:true|false)\b/,
  function: /\w+(?=\()/,
  number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/
};

Prism.languages.javascript = Prism.languages.extend("clike", {
  "class-name": [
    Prism.languages.clike["class-name"],
    {
      pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
      lookbehind: true
    }
  ],
  keyword: [
    {
      pattern: /((?:^|})\s*)(?:catch|finally)\b/,
      lookbehind: true
    },
    {
      pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
      lookbehind: true
    }
  ],
  number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  operator: /--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/
});

Prism.languages.javascript[
  "class-name"
][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  "function-variable": {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: "function"
  },
  parameter: [
    {
      pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
      inside: Prism.languages.javascript
    },
    {
      pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    },
    {
      pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
      lookbehind: true,
      inside: Prism.languages.javascript
    }
  ],
  constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore("javascript", "string", {
  "template-string": {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      interpolation: {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\${|}$/,
            alias: "punctuation"
          },
          rest: Prism.languages.javascript
        }
      },
      string: /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined("script", "javascript");
}

Prism.languages.js = Prism.languages.javascript;

Prism.languages.c = Prism.languages.extend("clike", {
  comment: {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+/,
    lookbehind: true
  },
  keyword: /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  function: /[a-z_]\w*(?=\s*\()/i,
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
  number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
});

Prism.languages.insertBefore("c", "string", {
  macro: {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    alias: "property",
    inside: {
      // highlight the path of the include statement as a string
      string: {
        pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
        lookbehind: true
      },
      // highlight macro directives as keywords
      directive: {
        pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
        lookbehind: true,
        alias: "keyword"
      }
    }
  },
  // highlight predefined macros as constants
  constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
});

delete Prism.languages.c["boolean"];

Prism.languages.cpp = Prism.languages.extend("c", {
  "class-name": {
    pattern: /(\b(?:class|enum|struct)\s+)\w+/,
    lookbehind: true
  },
  keyword: /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
  number: {
    pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
    greedy: true
  },
  operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
  boolean: /\b(?:true|false)\b/
});

Prism.languages.insertBefore("cpp", "string", {
  "raw-string": {
    pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
    alias: "string",
    greedy: true
  }
});

(function(Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;

  Prism.languages.css.selector = {
    pattern: Prism.languages.css.selector,
    inside: (selectorInside = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      class: /\.[-:.\w]+/,
      id: /#[-:.\w]+/,
      attribute: {
        pattern: RegExp("\\[(?:[^[\\]\"']|" + string.source + ")*\\]"),
        greedy: true,
        inside: {
          punctuation: /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: "keyword"
          },
          namespace: {
            pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
            lookbehind: true,
            inside: {
              punctuation: /\|$/
            }
          },
          attribute: {
            pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
            lookbehind: true
          },
          value: [
            string,
            {
              pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
              lookbehind: true
            }
          ],
          operator: /[|~*^$]?=/
        }
      },
      "n-th": [
        {
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: true,
          inside: {
            number: /[\dn]+/,
            operator: /[+-]/
          }
        },
        {
          pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
          lookbehind: true
        }
      ],
      punctuation: /[()]/
    })
  };

  Prism.languages.css["atrule"].inside[
    "selector-function-argument"
  ].inside = selectorInside;

  Prism.languages.insertBefore("css", "property", {
    variable: {
      pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
      lookbehind: true
    }
  });

  var unit = {
    pattern: /(\d)(?:%|[a-z]+)/,
    lookbehind: true
  };
  // 123 -123 .123 -.123 12.3 -12.3
  var number = {
    pattern: /(^|[^\w.-])-?\d*\.?\d+/,
    lookbehind: true
  };

  Prism.languages.insertBefore("css", "function", {
    operator: {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    // CAREFUL!
    // Previewers and Inline color use hexcode and color.
    hexcode: {
      pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i,
      alias: "color"
    },
    color: [
      /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
      {
        pattern: /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
        inside: {
          unit: unit,
          number: number,
          function: /[\w-]+(?=\()/,
          punctuation: /[(),]/
        }
      }
    ],
    entity: /\\[\da-f]{1,8}/i,
    unit: unit,
    number: number
  });
})(Prism);

(function(Prism) {
  var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|null|open|opens|package|private|protected|provides|public|record|requires|return|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;

  // based on the java naming conventions
  var className = /\b[A-Z](?:\w*[a-z]\w*)?\b/;

  Prism.languages.java = Prism.languages.extend("clike", {
    "class-name": [
      className,

      // variables and parameters
      // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
      /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/
    ],
    keyword: keywords,
    function: [
      Prism.languages.clike.function,
      {
        pattern: /(\:\:)[a-z_]\w*/,
        lookbehind: true
      }
    ],
    number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    operator: {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: true
    }
  });

  Prism.languages.insertBefore("java", "string", {
    "triple-quoted-string": {
      // http://openjdk.java.net/jeps/355#Description
      pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
      greedy: true,
      alias: "string"
    }
  });

  Prism.languages.insertBefore("java", "class-name", {
    annotation: {
      alias: "punctuation",
      pattern: /(^|[^.])@\w+/,
      lookbehind: true
    },
    namespace: {
      pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(?:\.[a-z]\w*)+/,
      lookbehind: true,
      inside: {
        punctuation: /\./
      }
    },
    generics: {
      pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
      inside: {
        "class-name": className,
        keyword: keywords,
        punctuation: /[<>(),.:]/,
        operator: /[?&|]/
      }
    }
  });
})(Prism);

Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true
  },
  "string-interpolation": {
    pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      interpolation: {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: true,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=}$)/,
            lookbehind: true
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      string: /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
    greedy: true,
    alias: "string"
  },
  string: {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  function: {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  decorator: {
    pattern: /(^\s*)@\w+(?:\.\w+)*/im,
    lookbehind: true,
    alias: ["annotation", "punctuation"],
    inside: {
      punctuation: /\./
    }
  },
  keyword: /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  builtin: /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  boolean: /\b(?:True|False|None)\b/,
  number: /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  punctuation: /[{}[\];(),.:]/
};

Prism.languages.python["string-interpolation"].inside[
  "interpolation"
].inside.rest = Prism.languages.python;

Prism.languages.py = Prism.languages.python;

(function() {
  if (
    typeof window.self === "undefined" ||
    !window.self.Prism ||
    !window.self.document ||
    !document.querySelector
  ) {
    return;
  }

  function $$(expr, con) {
    return Array.prototype.slice.call((con || document).querySelectorAll(expr));
  }

  function hasClass(element, className) {
    className = " " + className + " ";
    return (
      (" " + element.className + " ")
        .replace(/[\n\t]/g, " ")
        .indexOf(className) > -1
    );
  }

  function callFunction(func) {
    func();
  }

  // Some browsers round the line-height, others don't.
  // We need to test for it to position the elements properly.
  var isLineHeightRounded = (function() {
    var res;
    return function() {
      if (typeof res === "undefined") {
        var d = document.createElement("div");
        d.style.fontSize = "13px";
        d.style.lineHeight = "1.5";
        d.style.padding = 0;
        d.style.border = 0;
        d.innerHTML = "&nbsp;<br />&nbsp;";
        document.body.appendChild(d);
        // Browsers that round the line-height should have offsetHeight === 38
        // The others should have 39.
        res = d.offsetHeight === 38;
        document.body.removeChild(d);
      }
      return res;
    };
  })();

  /**
   * Highlights the lines of the given pre.
   *
   * This function is split into a DOM measuring and mutate phase to improve performance.
   * The returned function mutates the DOM when called.
   *
   * @param {HTMLElement} pre
   * @param {string} [lines]
   * @param {string} [classes='']
   * @returns {() => void}
   */
  function highlightLines(pre, lines, classes) {
    lines = typeof lines === "string" ? lines : pre.getAttribute("data-line");

    var ranges = lines.replace(/\s+/g, "").split(",");
    var offset = +pre.getAttribute("data-line-offset") || 0;

    var parseMethod = isLineHeightRounded() ? parseInt : parseFloat;
    var lineHeight = parseMethod(getComputedStyle(pre).lineHeight);
    var hasLineNumbers = hasClass(pre, "line-numbers");
    var parentElement = hasLineNumbers ? pre : pre.querySelector("code") || pre;
    var mutateActions = /** @type {(() => void)[]} */ ([]);

    ranges.forEach(function(currentRange) {
      var range = currentRange.split("-");

      var start = +range[0];
      var end = +range[1] || start;

      var line =
        pre.querySelector(
          '.line-highlight[data-range="' + currentRange + '"]'
        ) || document.createElement("div");

      mutateActions.push(function() {
        line.setAttribute("aria-hidden", "true");
        line.setAttribute("data-range", currentRange);
        line.className = (classes || "") + " line-highlight";
      });

      // if the line-numbers plugin is enabled, then there is no reason for this plugin to display the line numbers
      if (hasLineNumbers && Prism.plugins.lineNumbers) {
        var startNode = Prism.plugins.lineNumbers.getLine(pre, start);
        var endNode = Prism.plugins.lineNumbers.getLine(pre, end);

        if (startNode) {
          var top = startNode.offsetTop + "px";
          mutateActions.push(function() {
            line.style.top = top;
          });
        }

        if (endNode) {
          var height =
            endNode.offsetTop -
            startNode.offsetTop +
            endNode.offsetHeight +
            "px";
          mutateActions.push(function() {
            line.style.height = height;
          });
        }
      } else {
        mutateActions.push(function() {
          line.setAttribute("data-start", start);

          if (end > start) {
            line.setAttribute("data-end", end);
          }

          line.style.top = (start - offset - 1) * lineHeight + "px";

          line.textContent = new Array(end - start + 2).join(" \n");
        });
      }

      mutateActions.push(function() {
        // allow this to play nicely with the line-numbers plugin
        // need to attack to pre as when line-numbers is enabled, the code tag is relatively which screws up the positioning
        parentElement.appendChild(line);
      });
    });

    return function() {
      mutateActions.forEach(callFunction);
    };
  }

  function applyHash() {
    var hash = window.location.hash.slice(0, 1);
    // Remove pre-existing temporary lines
    $$(".temporary.line-highlight").forEach(function(line) {
      line.parentNode.removeChild(line);
    });

    var range = (hash.match(/\.([\d,-]+)$/) || [, ""])[1];

    if (!range || document.getElementById(hash)) {
      return;
    }

    var id = hash.slice(0, hash.lastIndexOf(".")),
      pre = document.getElementById(id);

    if (!pre) {
      return;
    }

    if (!pre.hasAttribute("data-line")) {
      pre.setAttribute("data-line", "");
    }

    var mutateDom = highlightLines(pre, range, "temporary ");
    mutateDom();

    document.querySelector(".temporary.line-highlight").scrollIntoView();
  }

  var fakeTimer = 0; // Hack to limit the number of times applyHash() runs

  Prism.hooks.add("before-sanity-check", function(env) {
    var pre = env.element.parentNode;
    var lines = pre && pre.getAttribute("data-line");

    if (!pre || !lines || !/pre/i.test(pre.nodeName)) {
      return;
    }

    /*
     * Cleanup for other plugins (e.g. autoloader).
     *
     * Sometimes <code> blocks are highlighted multiple times. It is necessary
     * to cleanup any left-over tags, because the whitespace inside of the <div>
     * tags change the content of the <code> tag.
     */
    var num = 0;
    $$(".line-highlight", pre).forEach(function(line) {
      num += line.textContent.length;
      line.parentNode.removeChild(line);
    });
    // Remove extra whitespace
    if (num && /^( \n)+$/.test(env.code.slice(-num))) {
      env.code = env.code.slice(0, -num);
    }
  });

  Prism.hooks.add("complete", function completeHook(env) {
    var pre = env.element.parentNode;
    var lines = pre && pre.getAttribute("data-line");

    if (!pre || !lines || !/pre/i.test(pre.nodeName)) {
      return;
    }

    clearTimeout(fakeTimer);

    var hasLineNumbers = Prism.plugins.lineNumbers;
    var isLineNumbersLoaded = env.plugins && env.plugins.lineNumbers;

    if (
      hasClass(pre, "line-numbers") &&
      hasLineNumbers &&
      !isLineNumbersLoaded
    ) {
      Prism.hooks.add("line-numbers", completeHook);
    } else {
      var mutateDom = highlightLines(pre, lines);
      mutateDom();
      fakeTimer = setTimeout(applyHash, 1);
    }
  });

  window.addEventListener("hashchange", applyHash);
  window.addEventListener("resize", function() {
    var actions = [];
    $$("pre[data-line]").forEach(function(pre) {
      actions.push(highlightLines(pre));
    });
    actions.forEach(callFunction);
  });
})();

(function() {
  if (
    typeof window.self === "undefined" ||
    !window.self.Prism ||
    !window.self.document
  ) {
    return;
  }

  /**
   * Plugin name which is used as a class name for <pre> which is activating the plugin
   * @type {String}
   */
  var PLUGIN_NAME = "line-numbers";

  /**
   * Regular expression used for determining line breaks
   * @type {RegExp}
   */
  var NEW_LINE_EXP = /\n(?!$)/g;

  /**
   * Resizes line numbers spans according to height of line of code
   * @param {Element} element <pre> element
   */
  var _resizeElement = function(element) {
    var codeStyles = getStyles(element);
    var whiteSpace = codeStyles["white-space"];

    if (whiteSpace === "pre-wrap" || whiteSpace === "pre-line") {
      var codeElement = element.querySelector("code");
      var lineNumbersWrapper = element.querySelector(".line-numbers-rows");
      var lineNumberSizer = element.querySelector(".line-numbers-sizer");
      var codeLines = codeElement.textContent.split(NEW_LINE_EXP);

      if (!lineNumberSizer) {
        lineNumberSizer = document.createElement("span");
        lineNumberSizer.className = "line-numbers-sizer";

        codeElement.appendChild(lineNumberSizer);
      }

      lineNumberSizer.style.display = "block";

      codeLines.forEach(function(line, lineNumber) {
        lineNumberSizer.textContent = line || "\n";
        var lineSize = lineNumberSizer.getBoundingClientRect().height;
        lineNumbersWrapper.children[lineNumber].style.height = lineSize + "px";
      });

      lineNumberSizer.textContent = "";
      lineNumberSizer.style.display = "none";
    }
  };

  /**
   * Returns style declarations for the element
   * @param {Element} element
   */
  var getStyles = function(element) {
    if (!element) {
      return null;
    }

    return window.getComputedStyle
      ? getComputedStyle(element)
      : element.currentStyle || null;
  };

  window.addEventListener("resize", function() {
    Array.prototype.forEach.call(
      document.querySelectorAll("pre." + PLUGIN_NAME),
      _resizeElement
    );
  });

  Prism.hooks.add("complete", function(env) {
    if (!env.code) {
      return;
    }

    var code = env.element;
    var pre = code.parentNode;

    // works only for <code> wrapped inside <pre> (not inline)
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    // Abort if line numbers already exists
    if (code.querySelector(".line-numbers-rows")) {
      return;
    }

    var addLineNumbers = false;
    var lineNumbersRegex = /(?:^|\s)line-numbers(?:\s|$)/;

    for (var element = code; element; element = element.parentNode) {
      if (lineNumbersRegex.test(element.className)) {
        addLineNumbers = true;
        break;
      }
    }

    // only add line numbers if <code> or one of its ancestors has the `line-numbers` class
    if (!addLineNumbers) {
      return;
    }

    // Remove the class 'line-numbers' from the <code>
    code.className = code.className.replace(lineNumbersRegex, " ");
    // Add the class 'line-numbers' to the <pre>
    if (!lineNumbersRegex.test(pre.className)) {
      pre.className += " line-numbers";
    }

    var match = env.code.match(NEW_LINE_EXP);
    var linesNum = match ? match.length + 1 : 1;
    var lineNumbersWrapper;

    var lines = new Array(linesNum + 1).join("<span></span>");

    lineNumbersWrapper = document.createElement("span");
    lineNumbersWrapper.setAttribute("aria-hidden", "true");
    lineNumbersWrapper.className = "line-numbers-rows";
    lineNumbersWrapper.innerHTML = lines;

    if (pre.hasAttribute("data-start")) {
      pre.style.counterReset =
        "linenumber " + (parseInt(pre.getAttribute("data-start"), 10) - 1);
    }

    env.element.appendChild(lineNumbersWrapper);

    _resizeElement(pre);

    Prism.hooks.run("line-numbers", env);
  });

  Prism.hooks.add("line-numbers", function(env) {
    env.plugins = env.plugins || {};
    env.plugins.lineNumbers = true;
  });

  /**
   * Global exports
   */
  Prism.plugins.lineNumbers = {
    /**
     * Get node for provided line number
     * @param {Element} element pre element
     * @param {Number} number line number
     * @return {Element|undefined}
     */
    getLine: function(element, number) {
      if (
        element.tagName !== "PRE" ||
        !element.classList.contains(PLUGIN_NAME)
      ) {
        return;
      }

      var lineNumberRows = element.querySelector(".line-numbers-rows");
      var lineNumberStart =
        parseInt(element.getAttribute("data-start"), 10) || 1;
      var lineNumberEnd =
        lineNumberStart + (lineNumberRows.children.length - 1);

      if (number < lineNumberStart) {
        number = lineNumberStart;
      }
      if (number > lineNumberEnd) {
        number = lineNumberEnd;
      }

      var lineIndex = number - lineNumberStart;

      return lineNumberRows.children[lineIndex];
    }
  };
})();

(function() {
  if (
    (typeof window.self !== "undefined" && !window.self.Prism) ||
    (typeof global !== "undefined" && !global.Prism)
  ) {
    return;
  }

  if (Prism.languages.css) {
    // check whether the selector is an advanced pattern before extending it
    if (Prism.languages.css.selector.pattern) {
      Prism.languages.css.selector.inside["pseudo-class"] = /:[\w-]+/;
      Prism.languages.css.selector.inside["pseudo-element"] = /::[\w-]+/;
    } else {
      Prism.languages.css.selector = {
        pattern: Prism.languages.css.selector,
        inside: {
          "pseudo-class": /:[\w-]+/,
          "pseudo-element": /::[\w-]+/
        }
      };
    }
  }

  if (Prism.languages.markup) {
    Prism.languages.markup.tag.inside.tag.inside["tag-id"] = /[\w-]+/;

    var Tags = {
      HTML: {
        a: 1,
        abbr: 1,
        acronym: 1,
        b: 1,
        basefont: 1,
        bdo: 1,
        big: 1,
        blink: 1,
        cite: 1,
        code: 1,
        dfn: 1,
        em: 1,
        kbd: 1,
        i: 1,
        rp: 1,
        rt: 1,
        ruby: 1,
        s: 1,
        samp: 1,
        small: 1,
        spacer: 1,
        strike: 1,
        strong: 1,
        sub: 1,
        sup: 1,
        time: 1,
        tt: 1,
        u: 1,
        var: 1,
        wbr: 1,
        noframes: 1,
        summary: 1,
        command: 1,
        dt: 1,
        dd: 1,
        figure: 1,
        figcaption: 1,
        center: 1,
        section: 1,
        nav: 1,
        article: 1,
        aside: 1,
        hgroup: 1,
        header: 1,
        footer: 1,
        address: 1,
        noscript: 1,
        isIndex: 1,
        main: 1,
        mark: 1,
        marquee: 1,
        meter: 1,
        menu: 1
      },
      SVG: {
        animateColor: 1,
        animateMotion: 1,
        animateTransform: 1,
        glyph: 1,
        feBlend: 1,
        feColorMatrix: 1,
        feComponentTransfer: 1,
        feFuncR: 1,
        feFuncG: 1,
        feFuncB: 1,
        feFuncA: 1,
        feComposite: 1,
        feConvolveMatrix: 1,
        feDiffuseLighting: 1,
        feDisplacementMap: 1,
        feFlood: 1,
        feGaussianBlur: 1,
        feImage: 1,
        feMerge: 1,
        feMergeNode: 1,
        feMorphology: 1,
        feOffset: 1,
        feSpecularLighting: 1,
        feTile: 1,
        feTurbulence: 1,
        feDistantLight: 1,
        fePointLight: 1,
        feSpotLight: 1,
        linearGradient: 1,
        radialGradient: 1,
        altGlyph: 1,
        textPath: 1,
        tref: 1,
        altglyph: 1,
        textpath: 1,
        altglyphdef: 1,
        altglyphitem: 1,
        clipPath: 1,
        "color-profile": 1,
        cursor: 1,
        "font-face": 1,
        "font-face-format": 1,
        "font-face-name": 1,
        "font-face-src": 1,
        "font-face-uri": 1,
        foreignObject: 1,
        glyphRef: 1,
        hkern: 1,
        vkern: 1
      },
      MathML: {}
    };
  }

  var language;

  Prism.hooks.add("wrap", function(env) {
    if (
      (env.type == "tag-id" ||
        (env.type == "property" && env.content.indexOf("-") != 0) ||
        (env.type == "rule" && env.content.indexOf("@-") != 0) ||
        (env.type == "pseudo-class" && env.content.indexOf(":-") != 0) ||
        (env.type == "pseudo-element" && env.content.indexOf("::-") != 0) ||
        (env.type == "attr-name" && env.content.indexOf("data-") != 0)) &&
      env.content.indexOf("<") === -1
    ) {
      if (
        env.language == "css" ||
        env.language == "scss" ||
        env.language == "markup"
      ) {
        var href = "https://webplatform.github.io/docs/";
        var content = env.content;

        if (env.language == "css" || env.language == "scss") {
          href += "css/";

          if (env.type == "property") {
            href += "properties/";
          } else if (env.type == "rule") {
            href += "atrules/";
            content = content.substring(1);
          } else if (env.type == "pseudo-class") {
            href += "selectors/pseudo-classes/";
            content = content.substring(1);
          } else if (env.type == "pseudo-element") {
            href += "selectors/pseudo-elements/";
            content = content.substring(2);
          }
        } else if (env.language == "markup") {
          if (env.type == "tag-id") {
            // Check language
            language = getLanguage(env.content) || language;

            if (language) {
              href += language + "/elements/";
            } else {
              return; // Abort
            }
          } else if (env.type == "attr-name") {
            if (language) {
              href += language + "/attributes/";
            } else {
              return; // Abort
            }
          }
        }

        href += content;
        env.tag = "a";
        env.attributes.href = href;
        env.attributes.target = "_blank";
      }
    }
  });

  function getLanguage(tag) {
    var tagL = tag.toLowerCase();

    if (Tags.HTML[tagL]) {
      return "html";
    } else if (Tags.SVG[tag]) {
      return "svg";
    } else if (Tags.MathML[tag]) {
      return "mathml";
    }

    // Not in dictionary, perform check
    if (Tags.HTML[tagL] !== 0 && typeof document !== "undefined") {
      var htmlInterface = (document
        .createElement(tag)
        .toString()
        .match(/\[object HTML(.+)Element\]/) || [])[1];

      if (htmlInterface && htmlInterface != "Unknown") {
        Tags.HTML[tagL] = 1;
        return "html";
      }
    }

    Tags.HTML[tagL] = 0;

    if (Tags.SVG[tag] !== 0 && typeof document !== "undefined") {
      var svgInterface = (document
        .createElementNS("http://www.w3.org/2000/svg", tag)
        .toString()
        .match(/\[object SVG(.+)Element\]/) || [])[1];

      if (svgInterface && svgInterface != "Unknown") {
        Tags.SVG[tag] = 1;
        return "svg";
      }
    }

    Tags.SVG[tag] = 0;

    // Lame way to detect MathML, but browsers don’t expose interface names there :(
    if (Tags.MathML[tag] !== 0) {
      if (tag.indexOf("m") === 0) {
        Tags.MathML[tag] = 1;
        return "mathml";
      }
    }

    Tags.MathML[tag] = 0;

    return null;
  }
})();
(function() {
  if (
    typeof window.self === "undefined" ||
    !window.self.Prism ||
    !window.self.document
  ) {
    return;
  }

  var callbacks = [];
  var map = {};
  var noop = function() {};

  Prism.plugins.toolbar = {};

  /**
   * @typedef ButtonOptions
   * @property {string} text The text displayed.
   * @property {string} [url] The URL of the link which will be created.
   * @property {Function} [onClick] The event listener for the `click` event of the created button.
   * @property {string} [className] The class attribute to include with element.
   */

  /**
   * Register a button callback with the toolbar.
   *
   * @param {string} key
   * @param {ButtonOptions|Function} opts
   */
  var registerButton = (Prism.plugins.toolbar.registerButton = function(
    key,
    opts
  ) {
    var callback;

    if (typeof opts === "function") {
      callback = opts;
    } else {
      callback = function(env) {
        var element;

        if (typeof opts.onClick === "function") {
          element = document.createElement("button");
          element.type = "button";
          element.addEventListener("click", function() {
            opts.onClick.call(this, env);
          });
        } else if (typeof opts.url === "string") {
          element = document.createElement("a");
          element.href = opts.url;
        } else {
          element = document.createElement("span");
        }

        if (opts.className) {
          element.classList.add(opts.className);
        }

        element.textContent = opts.text;

        return element;
      };
    }

    if (key in map) {
      console.warn(
        'There is a button with the key "' + key + '" registered already.'
      );
      return;
    }

    callbacks.push((map[key] = callback));
  });

  /**
   * Returns the callback order of the given element.
   *
   * @param {HTMLElement} element
   * @returns {string[] | undefined}
   */
  function getOrder(element) {
    while (element) {
      var order = element.getAttribute("data-toolbar-order");
      if (order != null) {
        order = order.trim();
        if (order.length) {
          return order.split(/\s*,\s*/g);
        } else {
          return [];
        }
      }
      element = element.parentElement;
    }
  }

  /**
   * Post-highlight Prism hook callback.
   *
   * @param env
   */
  var hook = (Prism.plugins.toolbar.hook = function(env) {
    // Check if inline or actual code block (credit to line-numbers plugin)
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    // Autoloader rehighlights, so only do this once.
    if (pre.parentNode.classList.contains("code-toolbar")) {
      return;
    }

    // Create wrapper for <pre> to prevent scrolling toolbar with content
    var wrapper = document.createElement("div");
    wrapper.classList.add("code-toolbar");
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // Setup the toolbar
    var toolbar = document.createElement("div");
    toolbar.classList.add("toolbar");

    // order callbacks
    var elementCallbacks = callbacks;
    var order = getOrder(env.element);
    if (order) {
      elementCallbacks = order.map(function(key) {
        return map[key] || noop;
      });
    }

    elementCallbacks.forEach(function(callback) {
      var element = callback(env);

      if (!element) {
        return;
      }

      var item = document.createElement("div");
      item.classList.add("toolbar-item");

      item.appendChild(element);
      toolbar.appendChild(item);
    });

    // Add our toolbar to the currently created wrapper of <pre> tag
    wrapper.appendChild(toolbar);
  });

  registerButton("label", function(env) {
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    if (!pre.hasAttribute("data-label")) {
      return;
    }

    var element, template;
    var text = pre.getAttribute("data-label");
    try {
      // Any normal text will blow up this selector.
      template = document.querySelector("template#" + text);
    } catch (e) {}

    if (template) {
      element = template.content;
    } else {
      if (pre.hasAttribute("data-url")) {
        element = document.createElement("a");
        element.href = pre.getAttribute("data-url");
      } else {
        element = document.createElement("span");
      }

      element.textContent = text;
    }

    return element;
  });

  /**
   * Register the toolbar with Prism.
   */
  Prism.hooks.add("complete", hook);
})();

(function() {
  if (
    typeof window.self === "undefined" ||
    !window.self.Prism ||
    !window.self.document
  ) {
    return;
  }

  if (!Prism.plugins.toolbar) {
    console.warn("Show Languages plugin loaded before Toolbar plugin.");

    return;
  }

  // The languages map is built automatically with gulp
  var Languages = /*languages_placeholder[*/ {
    html: "HTML",
    xml: "XML",
    svg: "SVG",
    mathml: "MathML",
    css: "CSS",
    clike: "C-like",
    js: "JavaScript",
    abap: "ABAP",
    abnf: "Augmented Backus–Naur form",
    antlr4: "ANTLR4",
    g4: "ANTLR4",
    apacheconf: "Apache Configuration",
    apl: "APL",
    aql: "AQL",
    arff: "ARFF",
    asciidoc: "AsciiDoc",
    adoc: "AsciiDoc",
    asm6502: "6502 Assembly",
    aspnet: "ASP.NET (C#)",
    autohotkey: "AutoHotkey",
    autoit: "AutoIt",
    shell: "Bash",
    basic: "BASIC",
    bbcode: "BBcode",
    shortcode: "BBcode",
    bnf: "Backus–Naur form",
    rbnf: "Routing Backus–Naur form",
    conc: "Concurnas",
    csharp: "C#",
    cs: "C#",
    dotnet: "C#",
    cpp: "C++",
    cil: "CIL",
    coffee: "CoffeeScript",
    cmake: "CMake",
    csp: "Content-Security-Policy",
    "css-extras": "CSS Extras",
    dax: "DAX",
    django: "Django/Jinja2",
    jinja2: "Django/Jinja2",
    "dns-zone-file": "DNS zone file",
    "dns-zone": "DNS zone file",
    dockerfile: "Docker",
    ebnf: "Extended Backus–Naur form",
    ejs: "EJS",
    etlua: "Embedded Lua templating",
    erb: "ERB",
    "excel-formula": "Excel Formula",
    xlsx: "Excel Formula",
    xls: "Excel Formula",
    fsharp: "F#",
    "firestore-security-rules": "Firestore security rules",
    ftl: "FreeMarker Template Language",
    gcode: "G-code",
    gdscript: "GDScript",
    gedcom: "GEDCOM",
    glsl: "GLSL",
    gml: "GameMaker Language",
    gamemakerlanguage: "GameMaker Language",
    graphql: "GraphQL",
    hs: "Haskell",
    hcl: "HCL",
    http: "HTTP",
    hpkp: "HTTP Public-Key-Pins",
    hsts: "HTTP Strict-Transport-Security",
    ichigojam: "IchigoJam",
    inform7: "Inform 7",
    javadoc: "JavaDoc",
    javadoclike: "JavaDoc-like",
    javastacktrace: "Java stack trace",
    jq: "JQ",
    jsdoc: "JSDoc",
    "js-extras": "JS Extras",
    "js-templates": "JS Templates",
    json: "JSON",
    jsonp: "JSONP",
    json5: "JSON5",
    latex: "LaTeX",
    tex: "TeX",
    context: "ConTeXt",
    lilypond: "LilyPond",
    ly: "LilyPond",
    emacs: "Lisp",
    elisp: "Lisp",
    "emacs-lisp": "Lisp",
    llvm: "LLVM IR",
    lolcode: "LOLCODE",
    md: "Markdown",
    "markup-templating": "Markup templating",
    matlab: "MATLAB",
    mel: "MEL",
    moon: "MoonScript",
    n1ql: "N1QL",
    n4js: "N4JS",
    n4jsd: "N4JS",
    "nand2tetris-hdl": "Nand To Tetris HDL",
    nasm: "NASM",
    neon: "NEON",
    nginx: "nginx",
    nsis: "NSIS",
    objectivec: "Objective-C",
    ocaml: "OCaml",
    opencl: "OpenCL",
    parigp: "PARI/GP",
    objectpascal: "Object Pascal",
    pcaxis: "PC-Axis",
    px: "PC-Axis",
    php: "PHP",
    phpdoc: "PHPDoc",
    "php-extras": "PHP Extras",
    plsql: "PL/SQL",
    powerquery: "PowerQuery",
    pq: "PowerQuery",
    mscript: "PowerQuery",
    powershell: "PowerShell",
    properties: ".properties",
    protobuf: "Protocol Buffers",
    py: "Python",
    q: "Q (kdb+ database)",
    qml: "QML",
    jsx: "React JSX",
    tsx: "React TSX",
    renpy: "Ren'py",
    rest: "reST (reStructuredText)",
    robotframework: "Robot Framework",
    robot: "Robot Framework",
    rb: "Ruby",
    sas: "SAS",
    sass: "Sass (Sass)",
    scss: "Sass (Scss)",
    "shell-session": "Shell session",
    solidity: "Solidity (Ethereum)",
    "solution-file": "Solution file",
    sln: "Solution file",
    soy: "Soy (Closure Template)",
    sparql: "SPARQL",
    rq: "SPARQL",
    "splunk-spl": "Splunk SPL",
    sqf: "SQF: Status Quo Function (Arma 3)",
    sql: "SQL",
    tap: "TAP",
    toml: "TOML",
    tt2: "Template Toolkit 2",
    trig: "TriG",
    ts: "TypeScript",
    "t4-cs": "T4 Text Templates (C#)",
    t4: "T4 Text Templates (C#)",
    "t4-vb": "T4 Text Templates (VB)",
    "t4-templating": "T4 templating",
    vbnet: "VB.Net",
    vhdl: "VHDL",
    vim: "vim",
    "visual-basic": "Visual Basic",
    vb: "Visual Basic",
    wasm: "WebAssembly",
    wiki: "Wiki markup",
    xeoracube: "XeoraCube",
    xojo: "Xojo (REALbasic)",
    xquery: "XQuery",
    yaml: "YAML",
    yml: "YAML"
  }; /*]*/

  Prism.plugins.toolbar.registerButton("show-language", function(env) {
    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName)) {
      return;
    }

    /**
     * Tries to guess the name of a language given its id.
     *
     * @param {string} id The language id.
     * @returns {string}
     */
    function guessTitle(id) {
      if (!id) {
        return id;
      }
      return (id.substring(0, 1).toUpperCase() + id.substring(1)).replace(
        /s(?=cript)/,
        "S"
      );
    }

    var language =
      pre.getAttribute("data-language") ||
      Languages[env.language] ||
      guessTitle(env.language);

    if (!language) {
      return;
    }
    var element = document.createElement("span");
    element.textContent = language;

    return element;
  });
})();

(function() {
  if (
    typeof window.self === "undefined" ||
    typeof Prism === "undefined" ||
    typeof document === "undefined"
  ) {
    return;
  }

  // Copied from the markup language definition
  var HTML_TAG = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/g;

  // a regex to validate hexadecimal colors
  var HEX_COLOR = /^#?((?:[\da-f]){3,4}|(?:[\da-f]{2}){3,4})$/i;

  /**
   * Parses the given hexadecimal representation and returns the parsed RGBA color.
   *
   * If the format of the given string is invalid, `undefined` will be returned.
   * Valid formats are: `RGB`, `RGBA`, `RRGGBB`, and `RRGGBBAA`.
   *
   * Hexadecimal colors are parsed because they are not fully supported by older browsers, so converting them to
   * `rgba` functions improves browser compatibility.
   *
   * @param {string} hex
   * @returns {string | undefined}
   */
  function parseHexColor(hex) {
    var match = HEX_COLOR.exec(hex);
    if (!match) {
      return undefined;
    }
    hex = match[1]; // removes the leading "#"

    // the width and number of channels
    var channelWidth = hex.length >= 6 ? 2 : 1;
    var channelCount = hex.length / channelWidth;

    // the scale used to normalize 4bit and 8bit values
    var scale = channelWidth == 1 ? 1 / 15 : 1 / 255;

    // normalized RGBA channels
    var channels = [];
    for (var i = 0; i < channelCount; i++) {
      var int = parseInt(hex.substr(i * channelWidth, channelWidth), 16);
      channels.push(int * scale);
    }
    if (channelCount == 3) {
      channels.push(1); // add alpha of 100%
    }

    // output
    var rgb = channels
      .slice(0, 3)
      .map(function(x) {
        return String(Math.round(x * 255));
      })
      .join(",");
    var alpha = String(Number(channels[3].toFixed(3))); // easy way to round 3 decimal places

    return "rgba(" + rgb + "," + alpha + ")";
  }

  /**
   * Validates the given Color using the current browser's internal implementation.
   *
   * @param {string} color
   * @returns {string | undefined}
   */
  function validateColor(color) {
    var s = new Option().style;
    s.color = color;
    return s.color ? color : undefined;
  }

  /**
   * An array of function which parse a given string representation of a color.
   *
   * These parser serve as validators and as a layer of compatibility to support color formats which the browser
   * might not support natively.
   *
   * @type {((value: string) => (string|undefined))[]}
   */
  var parsers = [parseHexColor, validateColor];

  Prism.hooks.add("wrap", function(env) {
    if (env.type === "color" || env.classes.indexOf("color") >= 0) {
      var content = env.content;

      // remove all HTML tags inside
      var rawText = content.split(HTML_TAG).join("");

      var color;
      for (var i = 0, l = parsers.length; i < l && !color; i++) {
        color = parsers[i](rawText);
      }

      if (!color) {
        return;
      }

      var previewElement =
        '<span class="inline-color-wrapper"><span class="inline-color" style="background-color:' +
        color +
        ';"></span></span>';
      env.content = previewElement + content;
    }
  });
})();

(function() {
  if (
    typeof window.self === "undefined" ||
    !window.self.Prism ||
    !window.self.document ||
    !document.createElement
  ) {
    return;
  }

  // The dependencies map is built automatically with gulp
  var lang_dependencies = /*dependencies_placeholder[*/ {
    javascript: "clike",
    actionscript: "javascript",
    arduino: "cpp",
    aspnet: ["markup", "csharp"],
    bison: "c",
    c: "clike",
    csharp: "clike",
    cpp: "c",
    coffeescript: "javascript",
    crystal: "ruby",
    "css-extras": "css",
    d: "clike",
    dart: "clike",
    django: "markup-templating",
    ejs: ["javascript", "markup-templating"],
    etlua: ["lua", "markup-templating"],
    erb: ["ruby", "markup-templating"],
    fsharp: "clike",
    "firestore-security-rules": "clike",
    flow: "javascript",
    ftl: "markup-templating",
    glsl: "clike",
    gml: "clike",
    go: "clike",
    groovy: "clike",
    haml: "ruby",
    handlebars: "markup-templating",
    haxe: "clike",
    java: "clike",
    javadoc: ["markup", "java", "javadoclike"],
    jolie: "clike",
    jsdoc: ["javascript", "javadoclike"],
    "js-extras": "javascript",
    "js-templates": "javascript",
    jsonp: "json",
    json5: "json",
    kotlin: "clike",
    latte: ["clike", "markup-templating", "php"],
    less: "css",
    lilypond: "scheme",
    markdown: "markup",
    "markup-templating": "markup",
    n4js: "javascript",
    nginx: "clike",
    objectivec: "c",
    opencl: "c",
    parser: "markup",
    php: ["clike", "markup-templating"],
    phpdoc: ["php", "javadoclike"],
    "php-extras": "php",
    plsql: "sql",
    processing: "clike",
    protobuf: "clike",
    pug: ["markup", "javascript"],
    qml: "javascript",
    qore: "clike",
    jsx: ["markup", "javascript"],
    tsx: ["jsx", "typescript"],
    reason: "clike",
    ruby: "clike",
    sass: "css",
    scss: "css",
    scala: "java",
    "shell-session": "bash",
    smarty: "markup-templating",
    solidity: "clike",
    soy: "markup-templating",
    sparql: "turtle",
    sqf: "clike",
    swift: "clike",
    tap: "yaml",
    textile: "markup",
    tt2: ["clike", "markup-templating"],
    twig: "markup",
    typescript: "javascript",
    "t4-cs": ["t4-templating", "csharp"],
    "t4-vb": ["t4-templating", "visual-basic"],
    vala: "clike",
    vbnet: "basic",
    velocity: "markup",
    wiki: "markup",
    xeora: "markup",
    xquery: "markup"
  }; /*]*/

  var lang_aliases = /*aliases_placeholder[*/ {
    html: "markup",
    xml: "markup",
    svg: "markup",
    mathml: "markup",
    js: "javascript",
    g4: "antlr4",
    adoc: "asciidoc",
    shell: "bash",
    shortcode: "bbcode",
    rbnf: "bnf",
    conc: "concurnas",
    cs: "csharp",
    dotnet: "csharp",
    coffee: "coffeescript",
    jinja2: "django",
    "dns-zone": "dns-zone-file",
    dockerfile: "docker",
    xlsx: "excel-formula",
    xls: "excel-formula",
    gamemakerlanguage: "gml",
    hs: "haskell",
    tex: "latex",
    context: "latex",
    ly: "lilypond",
    emacs: "lisp",
    elisp: "lisp",
    "emacs-lisp": "lisp",
    md: "markdown",
    moon: "moonscript",
    n4jsd: "n4js",
    objectpascal: "pascal",
    px: "pcaxis",
    pq: "powerquery",
    mscript: "powerquery",
    py: "python",
    robot: "robotframework",
    rb: "ruby",
    sln: "solution-file",
    rq: "sparql",
    trig: "turtle",
    ts: "typescript",
    t4: "t4-cs",
    vb: "visual-basic",
    xeoracube: "xeora",
    yml: "yaml"
  }; /*]*/

  /**
   * @typedef LangDataItem
   * @property {{ success?: () => void, error?: () => void }[]} callbacks
   * @property {boolean} [error]
   * @property {boolean} [loading]
   */
  /** @type {Object<string, LangDataItem>} */
  var lang_data = {};

  var ignored_language = "none";
  var languages_path = "components/";

  var script = Prism.util.currentScript();
  if (script) {
    var autoloaderFile = /\bplugins\/autoloader\/prism-autoloader\.(?:min\.)js$/i;
    var prismFile = /[\w-]+\.(?:min\.)js$/i;
    if (script.hasAttribute("data-autoloader-path")) {
      // data-autoloader-path is set, so just use it
      languages_path = script
        .getAttribute("data-autoloader-path")
        .trim()
        .replace(/\/?$/, "/");
    } else {
      var src = script.src;
      if (autoloaderFile.test(src)) {
        // the script is the original autoloader script in the usual Prism project structure
        languages_path = src.replace(autoloaderFile, "components/");
      } else if (prismFile.test(src)) {
        // the script is part of a bundle like a custom prism.js from the download page
        languages_path = src.replace(prismFile, "components/");
      }
    }
  }

  var config = (Prism.plugins.autoloader = {
    languages_path: languages_path,
    use_minified: true,
    loadLanguages: loadLanguages
  });

  /**
   * Lazily loads an external script.
   *
   * @param {string} src
   * @param {() => void} [success]
   * @param {() => void} [error]
   */
  function addScript(src, success, error) {
    var s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.onload = function() {
      document.body.removeChild(s);
      success && success();
    };
    s.onerror = function() {
      document.body.removeChild(s);
      error && error();
    };
    document.body.appendChild(s);
  }

  /**
   * Returns the path to a grammar, using the language_path and use_minified config keys.
   *
   * @param {string} lang
   * @returns {string}
   */
  function getLanguagePath(lang) {
    return (
      config.languages_path +
      "prism-" +
      lang +
      (config.use_minified ? ".min" : "") +
      ".js"
    );
  }

  /**
   * Tries to load the grammar(s) and once loaded, highlights the given element again.
   *
   * @param {string} lang
   * @param {HTMLElement} elt
   */
  function registerElement(lang, elt) {
    if (lang in lang_aliases) {
      lang = lang_aliases[lang];
    }

    // Look for additional dependencies defined on the <code> or <pre> tags
    var deps = elt.getAttribute("data-dependencies");
    var parent = elt.parentElement;
    if (!deps && parent && parent.tagName.toLowerCase() === "pre") {
      deps = parent.getAttribute("data-dependencies");
    }

    if (deps) {
      deps = deps.split(/\s*,\s*/g);
    } else {
      deps = [];
    }

    loadLanguages(deps, function() {
      loadLanguage(lang, function() {
        Prism.highlightElement(elt);
      });
    });
  }

  /**
   * Loads all given grammars concurrently.
   *
   * @param {string[]|string} languages
   * @param {(languages: string[]) => void} [success]
   * @param {(language: string) => void} [error] This callback will be invoked on the first language to fail.
   */
  function loadLanguages(languages, success, error) {
    if (typeof languages === "string") {
      languages = [languages];
    }

    var total = languages.length;
    var completed = 0;
    var failed = false;

    if (total === 0) {
      if (success) {
        setTimeout(success, 0);
      }
      return;
    }

    function successCallback() {
      if (failed) {
        return;
      }
      completed++;
      if (completed === total) {
        success && success(languages);
      }
    }

    languages.forEach(function(lang) {
      loadLanguage(lang, successCallback, function() {
        if (failed) {
          return;
        }
        failed = true;
        error && error(lang);
      });
    });
  }

  /**
   * Loads a grammar with its dependencies.
   *
   * @param {string} lang
   * @param {() => void} [success]
   * @param {() => void} [error]
   */
  function loadLanguage(lang, success, error) {
    var force = lang.indexOf("!") >= 0;

    lang = lang.replace("!", "");
    lang = lang_aliases[lang] || lang;

    var load = function() {
      var data = lang_data[lang];
      if (!data) {
        data = lang_data[lang] = {
          callbacks: []
        };
      }
      data.callbacks.push({
        success: success,
        error: error
      });

      if (!force && Prism.languages[lang]) {
        languageCallback(lang, "success");
      } else if (!force && data.error) {
        languageCallback(lang, "error");
      } else if (force || !data.loading) {
        data.loading = true;
        var src = getLanguagePath(lang);
        addScript(
          src,
          function() {
            data.loading = false;
            languageCallback(lang, "success");
          },
          function() {
            data.loading = false;
            data.error = true;
            languageCallback(lang, "error");
          }
        );
      }
    };

    var dependencies = lang_dependencies[lang];
    if (dependencies && dependencies.length) {
      loadLanguages(dependencies, load, error);
    } else {
      load();
    }
  }

  /**
   * Runs all callbacks of the given type for the given language.
   *
   * @param {string} lang
   * @param {"success" | "error"} type
   */
  function languageCallback(lang, type) {
    if (lang_data[lang]) {
      var callbacks = lang_data[lang].callbacks;
      for (var i = 0, l = callbacks.length; i < l; i++) {
        var callback = callbacks[i][type];
        if (callback) {
          setTimeout(callback, 0);
        }
      }
      callbacks.length = 0;
    }
  }

  Prism.hooks.add("complete", function(env) {
    if (env.element && env.language && !env.grammar) {
      if (env.language !== ignored_language) {
        registerElement(env.language, env.element);
      }
    }
  });
})();

(function() {
  if (
    typeof window.self === "undefined" ||
    !window.self.Prism ||
    !window.self.document
  ) {
    return;
  }

  var clsReg = /(?:^|\s)command-line(?:\s|$)/;

  Prism.hooks.add("before-highlight", function(env) {
    var vars = (env.vars = env.vars || {});
    var commandLine = (vars["command-line"] = vars["command-line"] || {});

    if (commandLine.complete || !env.code) {
      commandLine.complete = true;
      return;
    }

    // Works only for <code> wrapped inside <pre> (not inline).
    var pre = env.element.parentNode;
    if (
      !pre ||
      !/pre/i.test(pre.nodeName) || // Abort only if neither the <pre> nor the <code> have the class
      (!clsReg.test(pre.className) && !clsReg.test(env.element.className))
    ) {
      commandLine.complete = true;
      return;
    }

    if (env.element.querySelector(".command-line-prompt")) {
      // Abort if prompt already exists.
      commandLine.complete = true;
      return;
    }

    var codeLines = env.code.split("\n");
    commandLine.numberOfLines = codeLines.length;
    var outputLines = (commandLine.outputLines = []);

    var outputSections = pre.getAttribute("data-output");
    var outputFilter = pre.getAttribute("data-filter-output");
    if (outputSections || outputSections === "") {
      // The user specified the output lines. -- cwells
      outputSections = outputSections.split(",");
      for (var i = 0; i < outputSections.length; i++) {
        // Parse the output sections into start/end ranges. -- cwells
        var range = outputSections[i].split("-");
        var outputStart = parseInt(range[0], 10);
        var outputEnd =
          range.length === 2 ? parseInt(range[1], 10) : outputStart;

        if (!isNaN(outputStart) && !isNaN(outputEnd)) {
          if (outputStart < 1) {
            outputStart = 1;
          }
          if (outputEnd > codeLines.length) {
            outputEnd = codeLines.length;
          }
          // Convert start and end to 0-based to simplify the arrays. -- cwells
          outputStart--;
          outputEnd--;
          // Save the output line in an array and clear it in the code so it's not highlighted. -- cwells
          for (var j = outputStart; j <= outputEnd; j++) {
            outputLines[j] = codeLines[j];
            codeLines[j] = "";
          }
        }
      }
    } else if (outputFilter) {
      // Treat lines beginning with this string as output. -- cwells
      for (var i = 0; i < codeLines.length; i++) {
        if (codeLines[i].indexOf(outputFilter) === 0) {
          // This line is output. -- cwells
          outputLines[i] = codeLines[i].slice(outputFilter.length);
          codeLines[i] = "";
        }
      }
    }

    env.code = codeLines.join("\n");
  });

  Prism.hooks.add("before-insert", function(env) {
    var vars = (env.vars = env.vars || {});
    var commandLine = (vars["command-line"] = vars["command-line"] || {});
    if (commandLine.complete) {
      return;
    }

    // Reinsert the output lines into the highlighted code. -- cwells
    var codeLines = env.highlightedCode.split("\n");
    for (var i = 0, l = (commandLine.outputLines || []).length; i < l; i++) {
      if (commandLine.outputLines.hasOwnProperty(i)) {
        codeLines[i] = commandLine.outputLines[i];
      }
    }
    env.highlightedCode = codeLines.join("\n");
  });

  Prism.hooks.add("complete", function(env) {
    var vars = (env.vars = env.vars || {});
    var commandLine = (vars["command-line"] = vars["command-line"] || {});
    if (commandLine.complete) {
      return;
    }

    var pre = env.element.parentNode;
    if (clsReg.test(env.element.className)) {
      // Remove the class "command-line" from the <code>
      env.element.className = env.element.className.replace(clsReg, " ");
    }
    if (!clsReg.test(pre.className)) {
      // Add the class "command-line" to the <pre>
      pre.className += " command-line";
    }

    var getAttribute = function(key, defaultValue) {
      return (pre.getAttribute(key) || defaultValue).replace(/"/g, "&quot");
    };

    // Create the "rows" that will become the command-line prompts. -- cwells
    var promptLines = new Array((commandLine.numberOfLines || 0) + 1);
    var promptText = getAttribute("data-prompt", "");
    if (promptText !== "") {
      promptLines = promptLines.join(
        '<span data-prompt="' + promptText + '"></span>'
      );
    } else {
      var user = getAttribute("data-user", "user");
      var host = getAttribute("data-host", "localhost");
      promptLines = promptLines.join(
        '<span data-user="' + user + '" data-host="' + host + '"></span>'
      );
    }

    // Create the wrapper element. -- cwells
    var prompt = document.createElement("span");
    prompt.className = "command-line-prompt";
    prompt.innerHTML = promptLines;

    // Remove the prompt from the output lines. -- cwells
    for (var i = 0, l = (commandLine.outputLines || []).length; i < l; i++) {
      if (commandLine.outputLines.hasOwnProperty(i)) {
        var node = prompt.children[i];
        node.removeAttribute("data-user");
        node.removeAttribute("data-host");
        node.removeAttribute("data-prompt");
      }
    }

    env.element.insertBefore(prompt, env.element.firstChild);
    commandLine.complete = true;
  });
})();

(function() {
  if (
    typeof window.self === "undefined" ||
    !window.self.Prism ||
    !window.self.document
  ) {
    return;
  }

  if (!Prism.plugins.toolbar) {
    console.warn("Copy to Clipboard plugin loaded before Toolbar plugin.");

    return;
  }

  var ClipboardJS = window.ClipboardJS || undefined;

  if (!ClipboardJS && typeof require === "function") {
    ClipboardJS = require("clipboard");
  }

  var callbacks = [];

  if (!ClipboardJS) {
    var script = document.createElement("script");
    var head = document.querySelector("head");

    script.onload = function() {
      ClipboardJS = window.ClipboardJS;

      if (ClipboardJS) {
        while (callbacks.length) {
          callbacks.pop()();
        }
      }
    };

    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js";
    head.appendChild(script);
  }

  Prism.plugins.toolbar.registerButton("copy-to-clipboard", function(env) {
    var linkCopy = document.createElement("button");
    linkCopy.textContent = "Copy";

    if (!ClipboardJS) {
      callbacks.push(registerClipboard);
    } else {
      registerClipboard();
    }

    return linkCopy;

    function registerClipboard() {
      var clip = new ClipboardJS(linkCopy, {
        text: function() {
          return env.code;
        }
      });

      clip.on("success", function() {
        linkCopy.textContent = "Copied!";

        resetText();
      });
      clip.on("error", function() {
        linkCopy.textContent = "Press Ctrl+C to copy";

        resetText();
      });
    }

    function resetText() {
      setTimeout(function() {
        linkCopy.textContent = "Copy";
      }, 5000);
    }
  });
})();

(function() {
  if (
    typeof window.self === "undefined" ||
    !window.self.Prism ||
    !window.self.document ||
    !document.querySelector
  ) {
    return;
  }

  Prism.plugins.toolbar.registerButton("download-file", function(env) {
    var pre = env.element.parentNode;
    if (
      !pre ||
      !/pre/i.test(pre.nodeName) ||
      !pre.hasAttribute("data-src") ||
      !pre.hasAttribute("data-download-link")
    ) {
      return;
    }
    var src = pre.getAttribute("data-src");
    var a = document.createElement("a");
    a.textContent = pre.getAttribute("data-download-link-label") || "Download";
    a.setAttribute("download", "");
    a.href = src;
    return a;
  });
})();
