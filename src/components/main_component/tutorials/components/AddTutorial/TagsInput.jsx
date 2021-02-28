import React from 'react'

const TagsInput = ({
  setTags,
  tags
}) => {

  const addTags = event => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const removeTags = index => {
    setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
  };

  return (
    <div className="tags-input row m-0">
      <div className="col-12 p-0">
        <div className="tags-area">
          {tags.map((tag, index) => (
            <div className="tag" key={index}>
              <span>{tag} <i
                class="fal fa-times-circle ml-2"
                onClick={() => removeTags(index)}
              />
              </span>
            </div>
          ))}
          <input
            type="text"
            onKeyUp={event => addTags(event)}
            placeholder="Press enter to add tags"
          />
        </div>

      </div>
    </div>
  );
};

export default TagsInput