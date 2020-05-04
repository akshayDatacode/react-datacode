import React, { Component } from "react";
import RightSideSection from "../../../right_section/RightSideSection";
import ProgramCard from "./ProgramCard";
import RecommendPost from "../../../right_section/RecommendPost";
import HeaderCard from "../../HeaderCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChalkboardTeacher,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Technologies from "../../../right_section/Technologies";
class DatastructurePgramQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="container-fluids ">
          <HeaderCard
            title="Java Programming Examples Question"
            color="#2D9E32"
            textcolor="white"
          />
          <div className="row">
            <div className="col-3 d-none d-sm-block ">
              <div className="card bg-primary">
                <div
                  className="card-body text-light p-2 m-1"
                  style={{
                    backgroundColor: "blue",
                  }}
                >
                  <h3>Java Road Map</h3>
                </div>
              </div>
              <ul class="list-group list-group-flush">
              <li className="list-group-item">Java Introduction</li>
                <li className="list-group-item">Variables and Data Types</li>
                <li className="list-group-item">Java Operators</li>
                <li className="list-group-item">If-else</li>

                <li className="list-group-item">Switch-Case</li>
                <li className="list-group-item">For loop</li>
                <li className="list-group-item">While loop</li>
                <li className="list-group-item">do-while loop</li>
                <li className="list-group-item">Continue statement</li>
                <li className="list-group-item">Break statement</li>
                <h1>Advanced</h1>
                <li className="list-group-item">Constructor</li>
                <li className="list-group-item">Static keyword</li>
                <li className="list-group-item">Java Inheritance</li>
                <li className="list-group-item">Polymorphism</li>
                <li className="list-group-item">Abstract class</li>
                <li className="list-group-item">Interface</li>
                <li className="list-group-item">Encapsulation</li>
                <li className="list-group-item">Packages</li>
                <li className="list-group-item">Exception handling</li>

              </ul>
            </div>

            <div className="col-md-6 ">
              {/* Nev ICONs */}
              <div className="row">
                <div className="col">
                  <Link
                    to="/home"
                    className="badge mr-1"
                    style={{ backgroundColor: "#06CB6C" }}
                  >
                    <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
                  </Link>
                  <Link
                    to="index_programming_questions"
                    className="badge mr-1 text-white"
                    style={{ backgroundColor: "#072C71" }}
                  >
                    <FontAwesomeIcon
                      icon={faCode}
                      size="1x"
                      color="#06CB6C"
                      className="mr-2"
                    />
                    back to code
                  </Link>
                </div>
              </div>
                {/* Main Question Fram */}
                <div
                className="row mt-3 pt-3 rounded"
                style={{ backgroundColor: "#B7CED8" }}
              >
                <div className="col">
                  <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                      DataStruture Programs on Array
                    </h5>
                    <ProgramCard
                      heading="Find pair with given sum in the array"
                      language="C"
code={`#include <stdio.h>

// Naive method to find a pair in an array with given sum
void findPair(int arr[], int n, int sum)
{
	// consider each element except last element
	for (int i = 0; i < n - 1; i++)
	{
		// start from i'th element till last element
		for (int j = i + 1; j < n; j++)
		{
			// if desired sum is found, print it and return
			if (arr[i] + arr[j] == sum)
			{
				printf("Pair found at index %d and %d", i, j);
				return;
			}
		}
	}
 
	// No pair with given sum exists in the array
	printf("Pair not found");
}
 
// Find pair with given sum in the array
int main()
{
	int arr[] = { 8, 7, 2, 5, 3, 1 };
	int sum = 10;
 
	int n = sizeof(arr)/sizeof(arr[0]);
 
	findPair(arr, n, sum);
 
	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Check if subarray with 0 sum is exists or not"
                      language="C"
code={`#include <iostream>
#include <unordered_set>
using namespace std;

// Function to check if sub-array with 0 sum is present
// in the given array or not
bool zeroSumSubarray(int A[], int n)
{
	// create an empty set to store sum of elements of each
	// sub-array A[0..i] where 0 <= i < n
	unordered_set<int> set;

	// insert 0 into set to handle the case when sub-array with
	// 0 sum starts from index 0
	set.insert(0);

	int sum = 0;
	
	// traverse the given array
	for (int i = 0; i < n; i++)
	{
		// sum of elements so far
		sum += A[i];

		// if sum is seen before, we have found a sub-array with 0 sum
		if (set.find(sum) != set.end()) {
			return true;
		} else {
			// insert sum so far into set
			set.insert(sum);
		}
	}

	// we reach here when no sub-array with 0 sum exists
	return false;
}

// main function
int main()
{
	int A[] = { 4, 2, -3, -1, 0, 4 };
	int n = sizeof(A)/sizeof(A[0]);

	zeroSumSubarray(A, n) ? 
			cout << "Subarray exists":
			cout << "Subarray do not exist";

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Print all sub-arrays with 0 sum"
                      language="C"
code={`#include <iostream>
#include <unordered_map>
using namespace std;

// Function to print all sub-arrays with 0 sum present
// in the given array
void printallSubarrays(int arr[], int n)
{
	// consider all sub-arrays starting from i
	for (int i = 0; i < n; i++)
	{
		int sum = 0;

		// consider all sub-arrays ending at j
		for (int j = i; j < n; j++)
		{
			// sum of elements so far
			sum += arr[j];

			// if sum is seen before, we have found a sub-array 
			// with 0 sum
			if (sum == 0) {
				cout << "Subarray [" << i << ".." << j << "]\n";
			}
		}
	}
}

// main function
int main()
{
	int arr[] = { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 };
	int n = sizeof(arr)/sizeof(arr[0]);

	printallSubarrays(arr, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Sort binary array in linear time"
                      language="C"
code={`#include <stdio.h>

// Function to sort binary array in linear time
int sort(int A[], int n)
{
	// count number of 0's
	int zeros = 0;
	for (int i = 0; i < n; i++) {
		if (A[i] == 0) {
			zeros++;
		}
	}

	// put 0's in the beginning
	int k = 0;
	while (zeros--) {
		A[k++] = 0;
	}

	// fill all remaining elements by 1
	while (k < n) {
		A[k++] = 1;
	}
}

// Sort binary array in linear time
int main(void)
{
	int A[] = { 0, 0, 1, 0, 1, 1, 0, 1, 0, 0 };
	int n = sizeof(A)/sizeof(A[0]);

	sort(A, n);

	// print the rearranged array
	for (int i = 0 ; i < n; i++) {
		printf("%d ", A[i]);
	}

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find a duplicate element in a limited range array"
                      language="C"
code={`#include <iostream>
using namespace std;

// Function to find a duplicate element in a limited range array
int findDuplicate(int arr[], int n)
{
	// create a visited array of size n+1
	// we can also use map instead of visited array
	bool visited[n];
	fill(visited, visited + n, 0); // sets every value in the array to 0

	// for each element of the array mark it as visited and
	// return the element if it is seen before
	for (int i = 0; i < n; i++)
	{
		// if element is seen before
		if (visited[arr[i]])
			return arr[i];

		// mark element as visited
		visited[arr[i]] = true;
	}

	// no duplicate found
	return -1;
}

// main function
int main()
{
	// input array contains n numbers between [1 to n - 1]
	// with one duplicate
	int arr[] = { 1, 2, 3, 4, 4 };
	int n = sizeof(arr) / sizeof(arr[0]);

	cout << "Duplicate element is " << findDuplicate(arr, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find largest sub-array formed by consecutive integers"
                      language="C"
code={`#include <iostream>
#include <vector>
using namespace std;

// Function to check if sub-array A[i..j] is formed by consecutive
// integers. Here min and max denotes the minimum and maximum element
// in the sub-array respectively
bool isConsecutive(int A[], int i, int j, int min, int max)
{
	// in order for an array to contain consecutive integers, the diff
	// between maximum and element element in it should be exactly j-i
	if (max - min != j - i)
		return false;

	// create a visited array (we can also use a set)
	vector<bool> visited(j - i + 1);

	// traverse the sub-array and checks if each element appears only once
	for (int k = i; k <= j; k++)
	{
		// if element is seen before, return false
		if (visited[A[k] - min])
			return false;

		// mark element as seen
		visited[A[k] - min] = true;
	}

	// we reach here when all elements in array are distinct
	return true;
}

// Find largest sub-array formed by consecutive integers
void findMaxSubArray(int A[], int n)
{
	int len = 1;
	int start = 0, end = 0;

	// consider each sub-array formed by A[i..j]

	// i denotes the beginning of sub-array
	for (int i = 0; i < n - 1; i++)
	{
		// stores minimum and maximum element in a sub-array A[i..j]
		int min_val = A[i], max_val = A[i];

		// j denotes the end of sub-array
		for (int j = i + 1; j < n; j++)
		{
			// update minimum and maximum element of the sub-array
			min_val = min(min_val, A[j]);
			max_val = max(max_val, A[j]);

			// check if subarray A[i..j] is formed by consecutive integers
			if (isConsecutive(A, i, j, min_val, max_val))
			{
				if (len < max_val - min_val + 1) {
					len = max_val - min_val + 1,
					start = i, end = j;
				}
			}
		}
	}

	// print maximum length sub-array
	cout << "The largest sub-array is [" << start << ", " << end << "]";
}

// main function
int main()
{
	int A[] = { 2, 0, 2, 1, 4, 3, 1, 0 };
	int n = sizeof(A) / sizeof(A[0]);

	findMaxSubArray(A, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find maximum length sub-array having given sum"
                      language="C"
code={`#include <stdio.h>

// Naive function to find maximum length sub-array with sum S present
// in the given array
void maxLengthSubArray(int arr[], int n, int S)
{
	// len stores the maximum length of sub-array with sum S
	int len = 0;

	// stores ending index of maximum length sub-array having sum S
	int ending_index = -1;

	// consider all sub-arrays starting from i
	for (int i = 0; i < n; i++)
	{
		int sum = 0;

		// consider all sub-arrays ending at j
		for (int j = i; j < n; j++)
		{
			// sum of elements in current sub-array
			sum += arr[j];

			// if we have found a sub-array with sum S
			if (sum == S)
			{
				// update length and ending index of max length sub-array
				if (len < j - i + 1)
				{
					len =  j - i + 1;
					ending_index = j;
				}
			}
		}
	}

	// print the sub-array
	printf("[%d, %d]", ending_index - len + 1, ending_index);
}

// main function
int main(void)
{
	int arr[] = { 5, 6, -5, 5, 3, 5, 3, -2, 0 };
	int sum = 8;

	int n = sizeof(arr)/sizeof(arr[0]);

	maxLengthSubArray(arr, n, sum);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find maximum length sub-array having equal number of 0’s and 1’s"
                      language="C"
code={`#include <iostream>
#include <unordered_map>
using namespace std;

// Function to find maximum length sub-array having equal number
// of 0's and 1's
void max_len_subarray(int arr[], int n)
{
	// create an empty map to store ending index of first sub-array
	// having some sum
	unordered_map<int, int> map;

	// insert (0, -1) pair into the set to handle the case when
	// sub-array with sum 0 starts from index 0
	map[0] = -1;

	// len stores the maximum length of sub-array with sum 0
	int len = 0;

	// stores ending index of maximum length sub-array having sum 0
	int ending_index = -1;

	int sum = 0;

	// Traverse through the given array
	for (int i = 0; i < n; i++)
	{
		// sum of elements so far (replace 0 with -1)
		sum += (arr[i] == 0)? -1 : 1;

		// if sum is seen before
		if (map.find(sum) != map.end())
		{
			// update length and ending index of maximum length
			// sub-array having sum 0
			if (len < i - map[sum])
			{
				len = i - map[sum];
				ending_index = i;
			}
		}
		// if sum is seen for first time, insert sum with its
		// index into the map
		else {
			map[sum] = i;
		}
	}

	// print the sub-array if present
	if (ending_index != -1) {
		cout << "[" << ending_index - len + 1 << ", " << ending_index << "]";
	} else {
		cout << "No sub-array exists";
	}
}

// main function
int main()
{
	int arr[] = { 0, 0, 1, 0, 1, 0, 0 };
	int n = sizeof(arr) / sizeof(arr[0]);

	max_len_subarray(arr, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Sort an array containing 0’s, 1’s and 2’s (Dutch National Flag Problem)"
                      language="C"
code={`#include <stdio.h>

// Utility function to swap two elements A[i] and A[j] in the array
void swap(int A[], int i, int j) {
	int temp = A[i];
	A[i] = A[j];
	A[j] = temp;
}

// Linear-time partition routine to sort an array containing 0, 1 and 2
// It similar to three-way Partitioning for Dutch national flag problem
int threeWayPartition(int A[], int end)
{
	int start = 0, mid = 0;
	int pivot = 1;

	while (mid <= end)
	{
		if (A[mid] < pivot)		 // current element is 0
		{
			swap(A, start, mid);
			++start, ++mid;
		}
		else if (A[mid] > pivot)	// current element is 2
		{
			swap(A, mid, end);
			--end;
		}
		else						 // current element is 1
		{
			++mid;
		}
	}
}

// Sort an array containing 0’s, 1’s and 2’s
int main()
{
	int A[] = { 0, 1, 2, 2, 1, 0, 0, 2, 0, 1, 1, 0 };
	int n = sizeof(A)/sizeof(A[0]);

	threeWayPartition(A, n - 1);

	for (int i = 0 ; i < n; i++) {
		printf("%d ", A[i]);
	}

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Inplace merge two sorted arrays"
                      language="C"
code={`#include <iostream>
#include <algorithm>
using namespace std;

// Utility function to print contents of an array
void printArray(int arr[], int n)
{
	for (int i = 0; i < n; i++) {
		cout << arr[i] << " ";
	}

	cout << '\n';
}

// in-place merge two sorted arrays X[] and Y[]
// invariant: X[] and Y[] are sorted at any point
void merge(int X[], int Y[], int m, int n)
{
	// consider each element X[i] of array X and ignore the element
	// if it is already in correct order else swap it with next smaller
	// element which happens to be first element of Y
	for (int i = 0; i < m;  i++)
	{
		// compare current element of X[] with first element of Y[]
		if (X[i] > Y[0])
		{
			swap(X[i], Y[0]);
			int first = Y[0];

			// move Y[0] to its correct position to maintain sorted
			// order of Y[]. Note: Y[1..n-1] is already sorted
			int k;
			for (k = 1; k < n && Y[k] < first; k++) {
				Y[k - 1] = Y[k];
			}

			Y[k - 1] = first;
		}
	}
}

// main function
int main()
{
	int X[] = { 1, 4, 7, 8, 10 };
	int Y[] = { 2, 3, 9 };

	int m = sizeof(X) / sizeof(X[0]);
	int n = sizeof(Y) / sizeof(Y[0]);

	merge(X, Y, m, n);

	cout << "X: "; printArray(X, m);
	cout << "Y: "; printArray(Y, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Merge two arrays by satisfying given constraints"
                      language="C"
code={`#include <stdio.h>

// Function to merge X[0..m] and Y[0..n] to X[0..m+n+1]
void merge(int X[], int Y[], int m, int n)
{
	// size of X[] is (k+1)
	int k = m + n + 1;

	// run till X[] or Y[] has elements left
	while (m >= 0 && n >= 0)
	{
		// put next greater element in next free position in X[] from end
		if (X[m] > Y[n]) {
			X[k--] = X[m--];
		} else {
			X[k--] = Y[n--];
		}
	}

	// copy remaining elements of Y[] (if any) to X[]
	while (n >= 0) {
		X[k--] = Y[n--];
	}

	// fill Y[] with all zeroes
	for (int i = 0; i < n; i++) {
		Y[i] = 0;
	}
}

// The function moves non-empty elements in X[] in the
// beginning and then merge it with Y[]
void rearrange(int X[], int Y[], int m, int n)
{
	// moves non-empty elements of X[] in the beginning
	int k = 0;
	for (int i = 0; i < m; i++) {
		if (X[i] != 0) {
			X[k++] = X[i];
		}
	}

	// merge X[0..k-1] and Y[0..n-1] to X[0..m-1]
	merge(X, Y, k - 1, n - 1);
}

// main function
int main()
{
	// vacant cells in X[] is represented by 0
	int X[] = { 0, 2, 0, 3, 0, 5, 6, 0, 0};
	int Y[] = { 1, 8, 9, 10, 15 };

	int m = sizeof(X) / sizeof(X[0]);
	int n = sizeof(Y) / sizeof(Y[0]);

	// validate input before calling rearrange()
	// 1. Both arrays X[] and Y[] should be sorted (ignore 0's in X[])
	// 2. size of array X[] >= size of array Y[] (i.e. m >= n)
	// 3. Number of vacant cells in array X[] = size of array Y[]

	// merge Y[] in X[]
	rearrange(X, Y, m, n);

	// print merged array
	for (int i = 0; i < m; i++) {
		printf("%d ", X[i]);
	}

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find index of 0 to replaced to get maximum length sequence of continuous ones"
                      language="C"
code={`#include <stdio.h>

// Find index of 0 to replaced with 1 to get maximum sequence
// of continuous 1's
int findIndexofZero(int arr[], int n)
{
	int max_count = 0;  	// stores maximum number of 1's (including zero)
	int max_index = -1; 	// stores index of 0 to be replaced

	int prev_zero_index = -1;   // stores index of previous zero
	int count = 0;  			// store current count of zeros

	// consider each index i of the array
	for (int i = 0; i < n; i++)
	{
		// if current element is 1
		if (arr[i] == 1) {
			count++;
		}
		else
		// if current element is 0
		{
			// reset count to 1 + number of ones to the left of current 0
			count = i - prev_zero_index;

			// update prev_zero_index to current index
			prev_zero_index = i;
		}

		// update maximum count and index of 0 to be replaced if required
		if (count > max_count)
		{
			max_count = count;
			max_index = prev_zero_index;
		}
	}

	// return index of 0 to be replaced or -1 if array contains all 1's
	return max_index;
}

// main function
int main(void)
{
	int arr[] = { 0, 0, 1, 0, 1, 1, 1, 0, 1, 1 };
	int n = sizeof(arr) / sizeof(arr[0]);

	int index = findIndexofZero(arr, n);

	if (index != -1)
		printf("Index to be replaced is %d", index);
	else
		printf("Invalid input");

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find maximum product of two integers in an array"
                      language="C"
code={`#include <stdio.h>
#include <limits.h>

// Naive solution to find maximum product of two integers
// in an array
void findMaximumProduct(int arr[], int n)
{
	int max_product = INT_MIN;
	int max_i, max_j;

	// consider every pair of elements
	for (int i = 0; i < n - 1; i++)
	{
		for (int j = i + 1; j < n; j++)
		{
			// update maximum product if required
			if (max_product < arr[i] * arr[j])
			{
				max_product = arr[i] * arr[j];
				max_i = i, max_j = j;
			}
		}
	}

	printf("Pair is (%d, %d)", arr[max_i], arr[max_j]);
}

// main function
int main()
{
	int arr[] = { -10, -3, 5, 6, -2 };
	int n = sizeof(arr) / sizeof(arr[0]);

	findMaximumProduct(arr, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Shuffle a given array of elements (Fisher–Yates shuffle)"
                      language="C"
code={`#include <stdio.h>

// Utility function to swap two elements A[i] and A[j] in the array
void swap(int A[], int i, int j) {
	int temp = A[i];
	A[i] = A[j];
	A[j] = temp;
}

// Function to shuffle an array A[] of n elements
void shuffle(int A[], int n)
{
	// read array from highest index to lowest
	for (int i = n - 1; i >= 1; i--)
	{
		// generate a random number j such that 0 <= j <= i
		int j = rand() % (i + 1);

		// swap current element with randomly generated index
		swap(A, i, j);
	}
}

// main function
int main(void)
{
	int A[] = { 1, 2, 3, 4, 5, 6 };
	int n = sizeof(A) / sizeof(A[0]);

	// seed for random input
	srand(time(NULL));

	shuffle(A, n);

	// print the shuffled array
	for (int i = 0; i < n; i++) {
		printf("%d ", A[i]);
	}

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Rearrange the array with alternate high and low elements"
                      language="C"
code={`#include <stdio.h>

// Utility function to swap two elements arr[i] and arr[j] in the array
void swap(int arr[], int i, int j)
{
	int temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

// Function to rearrange the array such that every second element
// of the array is greater than its left and right elements
void rearrangeArray(int arr[], int n)
{
	// start from second element and increment index
	// by 2 for each iteration of loop
	for (int i = 1; i < n; i += 2)
	{
		// If the prev element is greater than current element,
		// swap the elements
		if (arr[i - 1] > arr[i]) {
			swap(arr, i-1, i);
		}

		// if next element is greater than current element,
		// swap the elements
		if (i + 1 < n && arr[i + 1] > arr[i]) {
			swap(arr, i+1, i);
		}
	}
}

// main function
int main(void)
{
	int arr[] = { 9, 6, 8, 3, 7 };
	int n = sizeof(arr) / sizeof(arr[0]);

	rearrangeArray(arr, n);

	// print output array
	for (int i = 0; i < n; i++) {
		printf("%d ", arr[i]);
	}

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find equilibrium index of an array"
                      language="C"
code={`#include <stdio.h>

// Function to find equilibrium index of an array
void equilibriumIndex(int A[], int n)
{
	// left[i] stores sum of elements of sub-array A[0..i-1]
	int left[n];

	left[0] = 0;

	// traverse array from left to right
	for (int i = 1; i < n; i++) {
		left[i] = left[i - 1] + A[i - 1];
	}

	// right stores sum of elements of sub-array A[i+1..n)
	int right = 0;

	// traverse array from right to left
	for (int i = n - 1; i >= 0; i--)
	{
		/* If sum of elements of sub-array A[0..i-1] is equal to
		   the sum of elements of sub-array A[i+1..n) i.e.
		   (A[0] + A[1] + .. + A[i-1]) = (A[i+1] + A[i+2] + .. + A[n-1])
		*/

		if (left[i] == right) {
			printf("Equilibrium Index found at %d\n", i);
		}

		// new right = A[i] + (A[i+1] + A[i+2] + .. + A[n-1])
		right += A[i];
	}
}

// Program to find the equilibrium index of an array
int main(void)
{
	int A[] = { 0, -3, 5, -4, -2, 3, 1, 0 };
	int n = sizeof(A) / sizeof(A[0]);

	equilibriumIndex(A, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find majority element in an array (Boyer–Moore majority vote algorithm)"
                      language="C"
code={`int majorityElementNaive(int A[], int n)
{
	// check if A[i] is majority element or not
	for (int i = 0; i <= n/2; i++)
	{
		int count = 1;
		for (int j = i + 1; j < n; j++) {
			if (A[j] == A[i]) {
				count++;
			}
		}

		if (count > n/2) {
			return A[i];
		}
	}

	return -1;
}`}
                     />
                     <ProgramCard
                      heading="Move all zeros present in the array to the end"
                      language="C"
code={`#include <stdio.h>

// Function to move all zeros present in the array to the end
void reorder(int A[], int n)
{
	// k stores index of next available position
	int k = 0;

	// do for each element
	for (int i = 0; i < n; i++)
	{
		// if current element is non-zero, put the element at
		// next free position in the array
		if (A[i] != 0)
			A[k++] = A[i];
	}

	// move all 0's to the end of the array (remaining indices)
	for (int i = k; i < n; i++)
		A[i] = 0;
}

// Move all zeros present in the array to the end
int main(void)
{
	int A[] = { 6, 0, 8, 2, 3, 0, 4, 0, 1 };
	int n = sizeof(A) / sizeof(A[0]);

	reorder(A, n);

	for (int i = 0; i < n; i++)
		printf("%d ", A[i]);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Replace each element of array with product of every other element without using / operator"
                      language="C"
code={`#include <stdio.h>

// Function to replace each element of the array with product
// of every other element without using division operator
void findProduct(int arr[], int n)
{
	// use two auxiliary arrays
	int left[n], right[n];

	// left[i] stores the product of all elements in the sub-array[0..i-1]
	left[0] = 1;
	for (int i = 1; i < n; i++)
		left[i] = arr[i - 1] * left[i - 1];

	// right[i] stores the product of all elements in sub-array[i+1..n-1]
	right[n - 1] = 1;
	for (int j = n - 2; j >= 0; j--)
		right[j] = arr[j + 1] * right[j + 1];

	// replace each element with product of its left and right sub-array
	for (int i = 0; i < n; i++)
		arr[i] = left[i] * right[i];
}

// main function
int main(void)
{
	int arr[] = { 5, 3, 4, 2, 6, 8 };
	int n = sizeof(arr) / sizeof(arr[0]);

	findProduct(arr, n);

	// print the modified array
	for (int i = 0; i < n; i++)
		printf("%d ", arr[i]);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find maximum difference between two elements in the array by satisfying given constraints"
                      language="C"
code={`#include <stdio.h>
#include <limits.h>

// Utility function to find maximum of two numbers
int max(int x, int y) {
	return (x > y) ? x : y;
}

// Naive function to find maximum difference between two elements in
// the array such that smaller element appears before the larger
// element in the array
int diff(int arr[], int n)
{
	int diff = INT_MIN;

	for (int i = 0; i < n - 1; i++)
		for (int j = i + 1; j < n; j++)
			diff = max(diff, arr[j] - arr[i]);

	return diff;
}

// main function
int main()
{
	int arr[] = { 2, 7, 9, 5, 1, 3, 5 };
	int n = sizeof(arr) / sizeof(arr[0]);

	printf("The maximum difference is %d", diff(arr, n));

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Maximum Sum Circular Subarray"
                      language="C"
code={`#include <iostream>
#include <numeric>
#include <algorithm>
using namespace std;

// Function to find contiguous sub-array with the largest sum
// in given set of integers
int kadane(int arr[], int n)
{
	// stores maximum sum sub-array found so far
	int max_so_far = 0;

	// stores maximum sum of sub-array ending at current position
	int max_ending_here = 0;

	// traverse the given array
	for (int i = 0; i < n; i++)
	{
		// update maximum sum of sub-array "ending" at index i (by adding
		// current element to maximum sum ending at previous index i-1)
		max_ending_here = max_ending_here + arr[i];

		// if maximum sum is negative, set it to 0 (which represents
		// an empty sub-array)
		max_ending_here = max(max_ending_here, 0);

		// update result if current sub-array sum is found to be greater
		max_so_far = max(max_so_far, max_ending_here);
	}

	return max_so_far;
}

// Function to find maximum sum circular subarray in a given array
int KadaneCircular(int arr[], int n)
{
	// negate all elements of the array
	for (int i = 0; i < n; i++)
		arr[i] = -arr[i];

	// run Kadane's algorithm on modified array
	int negMaxSum = kadane(arr, n);

	// restore the array
	for (int i = 0; i < n; i++)
		arr[i] = -arr[i];

	/*  return maximum of

		1. sum returned by Kadane's algorithm on original array.

		2. sum returned by Kadane's algorithm on modified array +
			sum of all elements of the array.
	*/

	return max(kadane(arr, n), accumulate(arr, arr + n, 0) + negMaxSum);
}

// main function
int main()
{
	int arr[] = { 2, 1, -5, 4, -3, 1, -3, 4, -1 };
	int n = sizeof(arr)/sizeof(arr[0]);

	cout << "The sum of subarray with the largest sum is " <<
			KadaneCircular(arr, n);

	return 0;
}`}
                     />
                      <ProgramCard
                      heading="Sort an array using one swap"
                      language="C"
code={`#include <iostream>
#include <algorithm>
using namespace std;

void sortArray(int arr[], int n)
{
	int x = -1, y = -1;
	int prev = arr[0];
	
	// process each adjacent pair of elements
	for (int i = 1; i < n; i++) 
	{
		// if previous element is greater than the current element
		if (prev > arr[i]) 
		{
			// first occurrence of conflict
			if (x == -1) 
				x = i - 1, y = i;
			else
			// second occurrence of conflict
				y = i;
		}
		prev = arr[i];
	}

	// swap the elements present at index x and index y
	swap(arr[x], arr[y]);
}

// main function
int main()
{
	// int arr[] = { 3, 8, 6, 7, 5, 9 };
	int arr[] = { 3, 5, 6, 9, 8, 7 };

	int n = sizeof(arr) / sizeof(arr[0]);

	sortArray(arr, n);

	for (int i = 0; i < n; i++)
		cout << arr[i] << " ";
		
	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Generate Random Input from an Array according to given Probabilities"
                      language="C"
code={`#include <iostream>
#include <vector>
#include <unordered_map>
#include <cstdlib>
#include <ctime>
using namespace std;

// Function to generate random input from a vector according to
// given probabilities
int random(vector<int> const &input, vector<int> const &probability)
{
	int n = input.size();
	if (n != probability.size())
		return -1;		// error

	// construct a sum vector from given probabilities
	vector<int> prob_sum(n, 0);

	// prob_sum[i] holds sum of all probability[j] for 0 <= j <=i
	prob_sum.at(0) = probability.at(0);
	for (int i = 1; i < n; i++)
		prob_sum.at(i) = prob_sum.at(i-1) + probability.at(i);

	// generate a random integer from 1 to 100
	// and check where it lies in prob_sum[]
	int r = (rand() % 100) + 1;

	// based on the comparison result, return corresponding
	// element from the input vector

	if (r <= prob_sum.at(0))	// handle 0'th index separately
		return input.at(0);

	for (int i = 1; i < n; i++)
	{
		if (r > prob_sum.at(i-1) && r <= prob_sum.at(i))
			return input.at(i);
	}
}

int main()
{
	// Input: vector of integers and their probability
	// Goal: generate input.at(i) with probability equal to probability.at(i)

	vector<int> input = {1, 2, 3, 4, 5};
	vector<int> probability = {30, 10, 20, 15, 25};

	// initialize srand with distinctive value
	srand(time(NULL));

	// maintain a frequency map to validate the results
	unordered_map<int, int> freq;

	// make 1000000 calls to the random() function and
	// store results in a map
	for (int i = 0; i < 1000000; i++) {
		int val = random(input, probability);
		freq[val]++;
	}

	// print the results
	for (int i = 0; i < input.size(); i++)
		cout << input.at(i) << " ~ " << freq[input.at(i)]/10000.0
			<< "%" << endl;

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Insertion sort | Iterative "
                      language="C"
code={`#include <stdio.h>

// perform insertion sort on arr[]
void insertionSort(int arr[], int n)
{
	// Start from second element (element at index 0 
	// is already sorted)
	for (int i = 1; i < n; i++) 
	{
		int value = arr[i];
		int j = i;
		
		// Find the index j within the sorted subset arr[0..i-1]
		// where element arr[i] belongs
		while (j > 0 && arr[j - 1] > value) 
		{
			arr[j] = arr[j - 1];
			j--;
		}

		// Note that subarray arr[j..i-1] is shifted to
		// the right by one position i.e. arr[j+1..i]
		
		arr[j] = value;
	}
}

// Function to print n elements of the array arr
void printArray(int arr[], int n)
{
	for (int i = 0; i < n; i++)
		printf("%d ", arr[i]);
}

int main(void)
{
	int arr[] = { 3, 8, 5, 4, 1, 9, -2 };
	int n = sizeof(arr) / sizeof(arr[0]);

	insertionSort(arr, n);

	// print the sorted array
	printArray(arr, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Selection sort | Iterative"
                      language="C"
code={`#include <stdio.h>

// Utility function to swap values at two indices in the array
void swap(int arr[], int i, int j)
{
	int temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

// Function to perform selection sort on arr[]
void selectionSort(int arr[], int n)
{
	// run (n - 1) times
	for (int i = 0; i < n - 1; i++) 
	{
		// find the minimum element in the unsorted subarray[i..n-1] 
		// and swap it with arr[i]
		int min = i;
		
		for (int j = i + 1; j < n; j++)
		{
			// if arr[j] element is less, then it is the new minimum
			if (arr[j] < arr[min])
				min = j;	// update index of min element
		}

		// swap the minimum element in subarray[i..n-1] with arr[i]
		swap(arr, min, i);
	}
}

// Function to print n elements of the array arr
void printArray(int arr[], int n)
{
	for (int i = 0; i < n; i++) {
		printf("%d ", arr[i]);
	}
}

// main function
int main(void)
{
	int arr[] = { 3, 5, 8, 4, 1, 9, -2 };
	int n = sizeof(arr) / sizeof(arr[0]);

	selectionSort(arr, n);
	printArray(arr, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Bubble sort | Iterative "
                      language="C"
code={`#include <stdio.h>

// Utility function to swap values at two indices in the array
void swap(int arr[], int i, int j)
{
	int temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

// Function to print n elements of the array arr
void printArray(int arr[], int n)
{
	for (int i = 0; i < n; i++) {
		printf("%d ", arr[i]);
	}
}

// perform bubble sort on arr[]
void bubbleSort(int arr[], int n)
{
	// (n - 1) pass
	for (int k = 0; k < n - 1; k++) 
	{
		// last k items are already sorted, so inner loop can 
		// avoid looking at the last k items
		for (int i = 0; i < n - 1 - k; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
			}
		}
		
		// the algorithm can be stopped if the inner loop didn’t do any swap
	}
}

// Bubble sort algorithm
int main(void)
{
	int arr[] = { 3, 5, 8, 4, 1, 9, -2 };
	int n = sizeof(arr) / sizeof(arr[0]);

	bubbleSort(arr, n);
	printArray(arr, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Merge Sort"
                      language="C"
code={`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define N 15

// Merge two sorted subarrays arr[low .. mid] and arr[mid + 1 .. high]
void Merge(int arr[], int aux[], int low, int mid, int high)
{
	int k = low, i = low, j = mid + 1;
	
	// While there are elements in the left and right runs
	while (i <= mid && j <= high) 
	{
		if (arr[i] <= arr[j])
			aux[k++] = arr[i++];
		else
			aux[k++] = arr[j++];
	}

	// Copy remaining elements
	while (i <= mid)
		aux[k++] = arr[i++];

	// No need to copy the second half

	// copy back to the original array to reflect sorted order
	for (int i = low; i <= high; i++)
		arr[i] = aux[i];
}

// Sort array arr [low..high] using auxiliary array aux
void MergeSort(int arr[], int aux[], int low, int high)
{
	// Base case
	if (high == low)	// if run size == 1
		return;

	// find mid point
	int mid = (low + ((high - low) >> 1));

	// recursively split runs into two halves until run size == 1,
	// then merge them and return back up the call chain

	MergeSort(arr, aux, low, mid);  	// split / merge left  half
	MergeSort(arr, aux, mid + 1, high); // split / merge right half

	Merge(arr, aux, low, mid, high);	// merge the two half runs
}

// Function to check if arr is sorted in ascending order or not
int isSorted(int arr[])
{
	int prev = arr[0];
	for (int i = 1; i < N; i++) {
		if (prev > arr[i]) {
			printf("MergeSort Fails!!");
			return 0;
		}
		prev = arr[i];
	}

	return 1;
}

// Implementation of Merge Sort Algorithm in C
int main(void)
{
	int arr[N], aux[N];
	srand(time(NULL));

	// generate random input of integers
	for (int i = 0; i < N; i++)
		aux[i] = arr[i] = (rand() % 100) - 50;

	// sort array 'arr' using auxiliary array 'aux'
	MergeSort(arr, aux, 0, N - 1);

	if (isSorted(arr)) {
		for (int i = 0; i < N; i++)
			printf("%d ", arr[i]);
	}

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Quicksort"
                      language="C++"
code={`#include <iostream>
#include <algorithm>
using namespace std;

// Partition using Lomuto partition scheme
int Partition(int a[], int start, int end)
{
	// Pick rightmost element as pivot from the array
	int pivot = a[end];

	// elements less than pivot will be pushed to the left of pIndex
	// elements more than pivot will be pushed to the right of pIndex
	// equal elements can go either way
	int pIndex = start;

	// each time we finds an element less than or equal to pivot, pIndex
	// is incremented and that element would be placed before the pivot.
	for (int i = start; i < end; i++)
	{
		if (a[i] <= pivot)
		{
			swap(a[i], a[pIndex]);
			pIndex++;
		}
	}
	// swap pIndex with Pivot
	swap (a[pIndex], a[end]);

	// return pIndex (index of pivot element)
	return pIndex;
}

// Quicksort routine
void quicksort(int a[] ,int start, int end)
{
	// base condition
	if (start >= end)
		return;

	// rearrange the elements across pivot
	int pivot = Partition(a, start, end);

	// recur on sub-array containing elements that are less than pivot
	quicksort(a, start, pivot - 1);

	// recur on sub-array containing elements that are more than pivot
	quicksort(a, pivot + 1, end);
}

// C++ implementation of quicksort algorithm
int main()
{
	int a[] = { 9, -3, 5, 2, 6, 8, -6, 1, 3 };
	int n = sizeof(a)/sizeof(a[0]);

	quicksort(a, 0, n - 1);

	// print the sorted array
	for (int i = 0 ; i < n; i++)
		cout << a[i] << " ";

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Binary Search"
                      language="C"
code={`#include <stdio.h>

// Iterative implementation of Binary Search Algorithm to return
// the position of target x in the array A of size N
int binarySearch(int A[], int N, int x)
{
	// search space is A[low..high]
	int low = 0, high = N - 1;

	// iterate till search space contains at-least one element
	while (low <= high)
	{
		// find the mid value in the search space and
		// compares it with target value

		int mid = (low + high)/2;	// overflow can happen
		// int mid = low + (high - low)/2;
		// int mid = high - (high - low)/2;

		// target value is found
		if (x == A[mid])
			return mid;

		// if target is less than the mid element, discard all elements
		// in the right search space including the mid element
		else if (x < A[mid])
			high = mid - 1;

		// if target is more than the mid element, discard all elements
		// in the left search space including the mid element
		else
			low = mid + 1;
	}

	// target doesn't exist in the array
	return -1;
}

// Iterative implementation of Binary Search Algorithm
int main(void)
{
	int A[] = { 2, 5, 6, 8, 9, 10 };
	int target = 5;

	int n = sizeof(A)/sizeof(A[0]);
	int index = ninarySearch(A, n, target);

	if (index != -1)
		printf("Element found at index %d", index);
	else
		printf("Element not found in the array");

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="0–1 Knapsack problem"
                      language="C++"
code={`#include <iostream>
#include <climits>
using namespace std;

// Values (stored in array v)
// Weights (stored in array w)
// Number of distinct items (n)
// Knapsack capacity W
int knapSack(int v[], int w[], int n, int W)
{
	// base case: Negative capacity
	if (W < 0)
		return INT_MIN;

	// base case: no items left or capacity becomes 0
	if (n < 0 || W == 0)
		return 0;

	// Case 1. include current item n in knapSack (v[n]) and recur for
	// remaining items (n - 1) with decreased capacity (W - w[n])
	int include = v[n] + knapSack(v, w, n - 1, W - w[n]);

	// Case 2. exclude current item n from knapSack and recur for
	// remaining items (n - 1)
	int exclude = knapSack(v, w, n - 1, W);

	// return maximum value we get by including or excluding current item
	return max (include, exclude);
}

// 0-1 Knapsack problem
int main()
{
	// Input: set of items each with a weight and a value
	int v[] = { 20, 5, 10, 40, 15, 25 };
	int w[] = {  1, 2,  3,  8,  7, 4 };

	// Knapsack capacity
	int W = 10;

	// number of items
	int n = sizeof(v) / sizeof(v[0]);

	cout << "Knapsack value is " << knapSack(v, w, n - 1, W);

	return 0;
}`}
                     />
                     </div>

                     <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                      DataStruture Programs on Backtracking
                    </h5>

                     <ProgramCard
                      heading="Print all possible solutions to N Queens problem"
                      language="C++"
code={`#include <iostream>
#include <cstring>
using namespace std;

// N x N chessboard
#define N 8

// Function to check if two queens threaten each other or not
bool isSafe(char mat[][N], int r, int c)
{
	// return false if two queens share the same column
	for (int i = 0; i < r; i++)
		if (mat[i][c] == 'Q')
			return false;

	// return false if two queens share the same \ diagonal
	for (int i = r, j = c; i >= 0 && j >= 0; i--, j--)
		if (mat[i][j] == 'Q')
			return false;

	// return false if two queens share the same / diagonal
	for (int i = r, j = c; i >= 0 && j < N; i--, j++)
		if (mat[i][j] == 'Q')
			return false;

	return true;
}

void nQueen(char mat[][N], int r)
{
	// if N queens are placed successfully, print the solution
	if (r == N)
	{
		for (int i = 0; i < N; i++) 
		{
			for (int j = 0; j < N; j++)
				cout << mat[i][j] << " ";
			cout << endl;
		}
		cout << endl;
		
		return;
	}

	// place Queen at every square in current row r
	// and recur for each valid movement	
	for (int i = 0; i < N; i++) 
	{
		// if no two queens threaten each other
		if (isSafe(mat, r, i)) 
		{
			// place queen on current square
			mat[r][i] = 'Q';

			// recur for next row
			nQueen(mat, r + 1);

			// backtrack and remove queen from current square
			mat[r][i] = '-';
		}
	}
}

int main()
{
	// mat[][] keeps track of position of Queens in current configuration
	char mat[N][N];

	// initalize mat[][] by '-'
	memset(mat, '-', sizeof mat);

	nQueen(mat, 0);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Print all Possible Knight’s Tours in a chessboard"
                      language="C++"
code={`#include <iostream>
#include <cstring>
using namespace std;

// N x N chessboard
#define N 5

// Below arrays details all 8 possible movements for a knight.
// It is important to avoid changing sequence of below arrays
int row[] = { 2, 1, -1, -2, -2, -1,  1,  2 , 2 };
int col[] = { 1, 2,  2,  1, -1, -2, -2, -1, 1 };

// Check if (x, y) is valid chess board coordinates
// Note that a knight cannot go out of the chessboard
bool isValid(int x, int y)
{
	if (x < 0 || y < 0 || x >= N || y >= N)
		return false;

	return true;
}

// Recursive function to perform the Knight's tour using backtracking
void KnightTour(int visited[N][N], int x, int y, int pos)
{
	// mark current square as visited	
	visited[x][y] = pos;
	
	// if all squares are visited, print the solution
	if (pos >= N*N)
	{
		for (int i = 0; i < N; i++)
		{
			for (int j = 0; j < N; j++)
				cout << visited[i][j] << " ";
			cout << endl;
		}
		cout << endl;
		// backtrack before returning
		visited[x][y] = 0;
		return;
	}

	// check for all 8 possible movements for a knight
	// and recur for each valid movement
	for (int k = 0; k < 8; k++)
	{
		// Get the new position of Knight from current
		// position on chessboard
		int newX = x + row[k];
		int newY = y + col[k];

		// if new position is a valid and not visited yet
		if (isValid(newX, newY) && !visited[newX][newY])
			KnightTour(visited, newX, newY, pos + 1);
	}

	// backtrack from current square and remove it from current path
	visited[x][y] = 0;
}

// Print all Possible Knight's Tours in a chessboard
int main()
{
	// visited[][] serves two purpose -
	// 1. It keep track of squares involved the Knight's tour.
	// 2. It stores the order in which the squares are visited
	int visited[N][N];
	
	// initialize visited[][] by 0 (unvisited)
	memset(visited, 0, sizeof visited);

	int pos = 1;
	
	// start knight tour from corner square (0, 0)
	KnightTour(visited, 0, 0, pos);
	
	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find Shortest Path in Maze"
                      language="C++"
code={`#include <iostream>
#include <climits>
#include <cstring>
using namespace std;
 
// M x N matrix
#define M 10
#define N 10
 
// Check if it is possible to go to (x, y) from current position. The 
// function returns false if the cell has value 0 or already visited
bool isSafe(int mat[M][N], int visited[M][N], int x, int y)
{
	if (mat[x][y] == 0 || visited[x][y])
		return false;
 
	return true;
}
 
// if not a valid position, return false
bool isValid(int x, int y)
{
	if (x < M && y < N && x >= 0 && y >= 0)
		return true;
	 
	return false;
}
 
// Find Shortest Possible Route in a Matrix mat from source cell (0, 0) 
// to destination cell (x, y)

// min_dist is passed by reference and stores length of longest path 
// from source to destination found so far dist maintains length of 
// path from source cell to current cell (i, j)

void findShortestPath(int mat[M][N], int visited[M][N], int i, int j,
				int x, int y, int& min_dist, int dist)
{
	// if destination is found, update min_dist
	if (i == x && j == y) 
	{
		min_dist = min(dist, min_dist);
		return;
	}

	// set (i, j) cell as visited
	visited[i][j] = 1;
	 
	// go to bottom cell
	if (isValid(i + 1, j) && isSafe(mat, visited, i + 1, j))
		findShortestPath(mat, visited, i + 1, j, x, y, min_dist, dist + 1);
 
	// go to right cell		 
	if (isValid(i, j + 1) && isSafe(mat, visited, i, j + 1))
		findShortestPath(mat, visited, i, j + 1, x, y, min_dist, dist + 1);
	 
	// go to top cell
	if (isValid(i - 1, j) && isSafe(mat, visited, i - 1, j))
		findShortestPath(mat, visited, i - 1, j, x, y, min_dist, dist + 1);
	 
	// go to left cell
	if (isValid(i, j - 1) && isSafe(mat, visited, i, j - 1))
		findShortestPath(mat, visited, i, j - 1, x, y, min_dist, dist + 1);
	 
	// Backtrack - Remove (i, j) from visited matrix
	visited[i][j] = 0;
}

// Find Shortest Path in Maze
int main()
{
	int mat[M][N] = 
	{
		{ 1, 1, 1, 1, 1, 0, 0, 1, 1, 1 },
		{ 0, 1, 1, 1, 1, 1, 0, 1, 0, 1 },
		{ 0, 0, 1, 0, 1, 1, 1, 0, 0, 1 },
		{ 1, 0, 1, 1, 1, 0, 1, 1, 0, 1 },
		{ 0, 0, 0, 1, 0, 0, 0, 1, 0, 1 },
		{ 1, 0, 1, 1, 1, 0, 0, 1, 1, 0 },
		{ 0, 0, 0, 0, 1, 0, 0, 1, 0, 1 },
		{ 0, 1, 1, 1, 1, 1, 1, 1, 0, 0 },
		{ 1, 1, 1, 1, 1, 0, 0, 1, 1, 1 },
		{ 0, 0, 1, 0, 0, 1, 1, 0, 0, 1 },
	};
 
	// construct a matrix to keep track of visited cells
	int visited[M][N];

	// initially all cells are unvisited
	memset(visited, 0, sizeof visited);
	
	int min_dist = INT_MAX;
	findShortestPath(mat, visited, 0, 0, 7, 5, min_dist, 0);
 
	if(min_dist != INT_MAX)
		cout << "The shortest path from source to destination "
				"has length " << min_dist;
	else 
		cout << "Destination can't be reached from given source";
	
	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find Longest Possible Route in a Matrix"
                      language="C++"
code={`#include <iostream>
#include <cstring>
using namespace std;

// M x N matrix
#define M 10
#define N 10

// check if it is possible to go to position (x, y) from 
// current position. The function returns false if the cell
// has value 0 or it is already visited.
bool isSafe(int mat[M][N], int visited[M][N], int x, int y)
{
	if (mat[x][y] == 0 || visited[x][y])
		return false;

	return true;
}

// if not a valid position, return false
bool isValid(int x, int y)
{
	if (x < M && y < N && x >= 0 && y >= 0)
		return true;
	
	return false;
}

// Find Longest Possible Route in a Matrix mat from source cell (0, 0) to
// destination cell (x, y)
// max_dist is passed by reference and stores length of longest path from 
// source to destination found so far dist maintains length of path from 
// source cell to current cell (i, j)
void findLongestPath(int mat[M][N], int visited[M][N], int i, int j,
				int x, int y, int& max_dist, int dist)
{
	// destination not possible from current cell
	if (mat[i][j] == 0)
		return;

	// if destination is found, update max_dist
	if (i == x && j == y) 
	{
		max_dist = max(dist, max_dist);
		return;
	}
	
	// set (i, j) cell as visited
	visited[i][j] = 1;
	
	// go to bottom cell
	if (isValid(i + 1, j) && isSafe(mat, visited, i + 1, j))
		findLongestPath(mat, visited, i + 1, j, x, y, max_dist, dist + 1);

	// go to right cell			
	if (isValid(i, j + 1) && isSafe(mat, visited, i, j + 1))
		findLongestPath(mat, visited, i, j + 1, x, y, max_dist, dist + 1);
	
	// go to top cell
	if (isValid(i - 1, j) && isSafe(mat, visited, i - 1, j))
		findLongestPath(mat, visited, i - 1, j, x, y, max_dist, dist + 1);
	
	// go to left cell
	if (isValid(i, j - 1) && isSafe(mat, visited, i, j - 1))
		findLongestPath(mat, visited, i, j - 1, x, y, max_dist, dist + 1);
	
	// Backtrack - Remove (i, j) from visited matrix
	visited[i][j] = 0;
}

// main function
int main()
{
	// input matrix
	int mat[M][N] = 
	{
		{ 1, 0, 1, 1, 1, 1, 0, 1, 1, 1 },
		{ 1, 0, 1, 0, 1, 1, 1, 0, 1, 1 },
		{ 1, 1, 1, 0, 1, 1, 0, 1, 0, 1 },
		{ 0, 0, 0, 0, 1, 0, 0, 1, 0, 0 },
		{ 1, 0, 0, 0, 1, 1, 1, 1, 1, 1 },
		{ 1, 1, 1, 1, 1, 1, 1, 1, 1, 0 },
		{ 1, 0, 0, 0, 1, 0, 0, 1, 0, 1 },
		{ 1, 0, 1, 1, 1, 1, 0, 0, 1, 1 },
		{ 1, 1, 0, 0, 1, 0, 0, 0, 0, 1 },
		{ 1, 0, 1, 1, 1, 1, 0, 1, 0, 0 }
	};

	// construct a matrix to keep track of visited cells
	int visited[M][N];
	memset(visited, 0, sizeof visited);

	int max_dist = 0;

	// (0,0) are the source cell and (5, 7) are the destination cell coordinates
	findLongestPath(mat, visited, 0, 0, 5, 7, max_dist, 0);

	cout << "Maximum length path is " << max_dist;

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find path from source to destination in a matrix that satisfies given constraints"
                      language="C++"
code={`#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// N x N matrix
#define N 10

// stores cell coordinates of the matrix
typedef pair<int, int> Node;

// Below arrays details all 4 possible movements from a cell
int row[] = { -1, 0, 0, 1 };
int col[] = { 0, -1, 1, 0 };

// Function to check if it is possible to go to position pt
// from current position. The function returns false if pt is
// not a valid position or it is already visited
bool isValid(vector<Node> path, Node pt)
{
	return (pt.first >= 0) && (pt.first < N) &&
		(pt.second >= 0) && (pt.second < N) &&
		(find(path.begin(), path.end(), pt) == path.end());
}

// Function to print the complete path from source to destination
void printPath(vector<Node> path)
{
	for (Node cell: path)
		cout << "(" << cell.first << ", " << cell.second << ") ";
	cout << endl;
}

// Find route in a matrix mat from source cell (0, 0) to 
// destination cell (N-1, N-1)
bool findPath(int mat[][N], vector<Node> &path, Node &curr)
{
	// include current cell in the path
	path.push_back(curr);
	
	// if destination is found, return true
	if (curr.first == N - 1 && curr.second == N - 1)
		return true;

	// value of current cell
	int n = mat[curr.first][curr.second];
	
	// check all 4 possible movements from current cell
	// and recur for each valid movement
	for (int i = 0; i < 4; i++)
	{
		// get next position using value of current cell
		int x = curr.first + row[i] * n;
		int y = curr.second + col[i] * n;

		Node next = make_pair(x, y);

		// check if it is possible to go to position (x, y) 
		// from current position
		if (isValid(path, next) && findPath(mat, path, next))
			return true;
	}
	
	// Backtrack - exclude current cell from the path
	path.pop_back();
	return false;
}

// main function
int main()
{
	int mat[N][N] =
	{
		{ 7, 1, 3, 5, 3, 6, 1, 1, 7, 5 },
		{ 2, 3, 6, 1, 1, 6, 6, 6, 1, 2 },
		{ 6, 1, 7, 2, 1, 4, 7, 6, 6, 2 },
		{ 6, 6, 7, 1, 3, 3, 5, 1, 3, 4 },
		{ 5, 5, 6, 1, 5, 4, 6, 1, 7, 4 },
		{ 3, 5, 5, 2, 7, 5, 3, 4, 3, 6 },
		{ 4, 1, 4, 3, 6, 4, 5, 3, 2, 6 },
		{ 4, 4, 1, 7, 4, 3, 3, 1, 4, 2 },
		{ 4, 4, 5, 1, 5, 2, 3, 5, 3, 5 },
		{ 3, 6, 3, 5, 2, 2, 6, 4, 2, 1 }
	};
	
	vector<Node> path;

	Node source = make_pair(0, 0);
	
	// Find route in a matrix mat from source cell (0, 0) to 
	// destination cell (N-1, N-1)
	if (findPath(mat, path, source))
		printPath(path);
	
	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find total number of unique paths in a maze from source to destination"
                      language="C++"
code={`#include <iostream>
#include <cstring>
using namespace std;
#define N 4

// Check if cell (x, y) is valid or not
bool isValidCell(int x, int y)
{
	if (x < 0 || y < 0 || x >= N || y >= N)
		return false;

	return true;
}

void countPaths(int maze[N][N], int x, int y, int visited[N][N], int& count)
{
	// if destination (bottom-rightmost cell) is found, 
	// increment the path count
	if (x == N - 1 && y == N - 1) 
	{
		count++;
		return;
	}

	// mark current cell as visited
	visited[x][y] = 1;
	
	// if current cell is a valid and open cell, 
	if (isValidCell(x, y) && maze[x][y]) 
	{
		// go down (x, y) --> (x + 1, y)
		if (x + 1 < N && !visited[x + 1][y])
			countPaths(maze, x + 1, y, visited, count);
			
		// go up (x, y) --> (x - 1, y)
		if (x - 1 >= 0 && !visited[x - 1][y])
			countPaths(maze, x - 1, y, visited, count);
			
		// go right (x, y) --> (x, y + 1)
		if (y + 1 < N && !visited[x][y + 1])
			countPaths(maze, x, y + 1, visited, count);
			
		// go left (x, y) --> (x, y - 1)
		if (y - 1 >= 0 && !visited[x][y - 1])
			countPaths(maze, x, y - 1, visited, count);
	}
	
	// backtrack from current cell and remove it from current path
	visited[x][y] = 0;
}

int main()
{
	int maze[N][N] = 
	{
		{ 1, 1, 1, 1 },
		{ 1, 1, 0, 1 },
		{ 0, 1, 0, 1 },
		{ 1, 1, 1, 1 }
	};

	// stores number of unique paths from source to destination
	int count = 0;

	// 2D matrix to keep track of cells involved in current path
	int visited[N][N];
	memset(visited, 0, sizeof visited);
	
	// start from source cell (0, 0)
	countPaths(maze, 0, 0, visited, count);
	
	cout << "Total number of unique paths are " << count;
	
	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find all Permutations of a given string"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Function to find all Permutations of a given string str[i..n-1]
// containing all distinct characters
void permutations(string str, int i, int n)
{
    // base condition
    if (i == n - 1)
    {
        cout << str << endl;
        return;
    }

    // process each character of the remaining string
    for (int j = i; j < n; j++)
    {
        // swap character at index i with current character
        swap(str[i], str[j]);        // STL swap() used

        // recur for string [i+1, n-1]
        permutations(str, i + 1, n);

        // backtrack (restore the string to its original state)
        swap(str[i], str[j]);
    }
}

// Find all Permutations of a string
int main()
{
    string str = "ABC";

    permutations(str, 0, str.length());

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="K-Partition Problem | Printing all Partitions"
                      language="C++"
code={`#include <iostream>
#include <numeric>

// Function to check if all subsets are filled or not
bool checkSum(int sumLeft[], int k)
{
	int r = true;
	for (int i = 0; i < k; i++)
	{
		if (sumLeft[i] != 0)
			r = false;
	}

	return r;
}

// Helper function for solving k partition problem
// It return true if there exists k subsets with given sum
bool subsetSum(int S[], int n, int sumLeft[], int A[], int k)
{
	// return true if subset is found
	if (checkSum(sumLeft, k))
		return true;

	// base case: no items left
	if (n < 0)
		return false;

	bool res = false;

	// consider current item S[n] and explore all possibilities
	// using backtracking
	for (int i = 0; i < k; i++)
	{
		if (!res && (sumLeft[i] - S[n]) >= 0)
		{
			// mark current element subset
			A[n] = i + 1;

			// add current item to i'th subset
			sumLeft[i] = sumLeft[i] - S[n];
			
			// recur for remaining items
			res = subsetSum(S, n - 1, sumLeft, A, k);
			
			// backtrack - remove current item from i'th subset
			sumLeft[i] = sumLeft[i] + S[n];
		}
	}

	// return true if we get solution
	return res;
}

// Function for solving k-partition problem. It prints the subsets if
// set S[0..n-1] can be divided into k subsets with equal sum
void partition(int S[], int n, int k)
{
	// base case
	if (n < k)
	{
		std::cout << "k-Partition of set S is not Possible";
		return;
	}

	// get sum of all elements in the set
	int sum = std::accumulate(S, S + n, 0);

 	int A[n], sumLeft[k];
 
 	// create an array of size k for each subset and initialize it 
 	// by their expected sum i.e. sum/k
	for (int i = 0; i < k; i++)
		sumLeft[i] = sum/k;
	
	// return true if sum is divisible by k and the set S can
	// be divided into k subsets with equal sum
	bool res = !(sum % k) && subsetSum(S, n - 1, sumLeft, A, k);

	if (!res)
	{
		std::cout << "k-Partition of set S is not Possible";
		return;
	}

	// print all k-partitions
	for (int i = 0; i < k; i++)
	{
		std::cout << "Partition " << i << " is: ";
	   	for (int j = 0; j < n; j++)
	 		if (A[j] == i + 1)
	 			std::cout << S[j] << " ";
	 	std::cout << std::endl;
	}
}

// main function for k-partition problem
int main()
{
	// Input: set of integers
	int S[] = { 7, 3, 5, 12, 2, 1, 5, 3, 8, 4, 6, 4 };

	// number of items in S
	int n = sizeof(S) / sizeof(S[0]);
	int k = 5;

	partition(S, n, k);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Magnet Puzzle"
                      language="C++"
code={`#include <iostream>
using namespace std;

// M x N matrix
#define M 5
#define N 6

// A utility function to print solution
void printSolution(char board[M][N])
{
	for (int i = 0; i < M; i++)
	{
		for (int j = 0; j < N; j++)
			cout << board[i][j] << " ";
		cout << endl;
	}
}

// A utility function to count number of characters ch in current column j
int countInColumns(char board[N][N], char ch, int j)
{
	int count = 0;
	for (int i = 0; i < M; i++)
		if (board[i][j] == ch)
			count++;

	return count;
}

// A utility function to count number of characters ch in current row i
int countInRow(char board[N][N], char ch, int i)
{
	int count = 0;
	for (int j = 0; j < N; j++)
		if (board[i][j] == ch)
			count++;

	return count;
}

// Function to check if it safe to put 'ch' at board[row][col]
bool isSafe(char board[N][N], int row, int col, char ch, int top[],
			 int left[], int bottom[], int right[])
{
	// check for adjacent cells
	if ((row - 1 >= 0 && board[row - 1][col] == ch) ||
		(col + 1 < N && board[row][col + 1] == ch) ||
		(row + 1 < M && board[row + 1][col] == ch) ||
		(col - 1 >= 0 && board[row][col - 1] == ch))
	return false;

	// count ch in current row
	int rowCount = countInRow(board, ch, row);

	// count ch in current column
	int colCount = countInColumns(board, ch, col);

	// if given character is '+', check top[] & left[]
	if (ch == '+')
	{
		// check top
		if (top[col] != -1 && colCount >= top[col])
			return false;

		// check left
		if (left[row] != -1 && rowCount >= left[row])
			return false;
	}
	
	// if given character is '-', check bottom[] & right[]
	if (ch == '-')
	{
		// check bottom
		if (bottom[col] != -1 && colCount >= bottom[col])
			return false;

		// check left
		if (right[row] != -1 && rowCount >= right[row])
			return false;
	}

	return true;
}

// Function to validate Configuration of output board
bool validateConfiguration(char board[N][N], int top[], int left[],
						int bottom[], int right[])
{
	// check top
	for (int i = 0; i < N; i++)
		if (top[i] != -1 &&
			countInColumns(board, '+', i) != top[i])
		return false;
	
	// check left
	for (int j = 0; j < M; j++)
		if (left[j] != -1 &&
			countInRow(board, '+', j) != left[j])
		return false;

	// check bottom
	for (int i = 0; i < N; i++)
		if (bottom[i] != -1 &&
			countInColumns(board, '-', i) != bottom[i])
		return false;
	
	// check right
	for (int j = 0; j < M; j++)
		if (right[j] != -1 &&
			countInRow(board, '-', j) != right[j])
		return false;

	return true;
}

// Main function to solve the Bipolar Magnets puzzle
bool solveMagnetPuzzle(char board[N][N], int row, int col, int top[],
				int left[], int bottom[], int right[], char str[M][N])
{
	// if we have reached last cell
	if (row >= M - 1 && col >= N - 1)
	{
		if (validateConfiguration(board, top, left, bottom, right))
			return true;

		return false;
	}
	
	// if last column of current row is already processed,
	// go to next row, first column
	if (col >= N)
	{
		col = 0;
		row = row + 1;
	}

	// if current cell contains 'R' or 'B' (end of horizontal
	// or vertical slot) recur for next cell
	if (str[row][col] == 'R' || str[row][col] == 'B')
	{
		if (solveMagnetPuzzle(board, row, col + 1, top,
								left, bottom, right, str))
			return true;
	}

	// if horizontal slot contains L and R
	if (str[row][col] == 'L' && str[row][col + 1] == 'R')
	{
		// put ('+', '-') pair and recur
		if (isSafe(board, row, col, '+', top, left, bottom, right) &&
			isSafe(board, row, col + 1, '-', top, left, bottom, right))
		{
			board[row][col] = '+';
			board[row][col + 1] = '-';

			if (solveMagnetPuzzle(board, row, col + 2,
							top, left, bottom, right, str))
				return true;
		
			// if it doesn't lead to a solution, backtrack
			board[row][col] = 'X';
			board[row][col + 1] = 'X';
		}

		// put ('-', '+') pair and recur
		if (isSafe(board, row, col, '-', top, left, bottom, right) &&
			isSafe(board, row, col + 1, '+', top, left, bottom, right))
		{
			board[row][col] = '-';
			board[row][col + 1] = '+';

			if (solveMagnetPuzzle(board, row, col + 2,
							top, left, bottom, right, str))
				return true;

			// if it doesn't lead to a solution, backtrack
			board[row][col] = 'X';
			board[row][col + 1] = 'X';
		}
	}

	// if vertical slot contains T and B
	if (str[row][col] == 'T' && str[row + 1][col] == 'B')
	{
		// put ('+', '-') pair and recur
		if (isSafe(board, row, col, '+', top, left, bottom, right) &&
			isSafe(board, row + 1, col, '-', top, left, bottom, right))
		{
			board[row][col] = '+';
			board[row + 1][col] = '-';

			if (solveMagnetPuzzle(board, row, col + 1,
							top, left, bottom, right, str))
				return true;

			// if it doesn't lead to a solution, backtrack
			board[row][col] = 'X';
			board[row + 1][col] = 'X';
		}

		// put ('-', '+') pair and recur
		if (isSafe(board, row, col, '-', top, left, bottom, right) &&
			isSafe(board, row + 1, col, '+', top, left, bottom, right))
		{
			board[row][col] = '-';
			board[row + 1][col] = '+';

			if (solveMagnetPuzzle(board, row, col + 1,
							top, left, bottom, right, str))
				return true;

			// if it doesn't lead to a solution, backtrack
			board[row][col] = 'X';
			board[row + 1][col] = 'X';
		}
	}
	
	// ignore current cell and recur
	if (solveMagnetPuzzle(board, row, col + 1,
						top, left, bottom, right, str))
		return true;

	// if no solution is possible, return false
	return false;
}

void solveMagnetPuzzle(int top[], int left[], int bottom[],
						int right[], char str[M][N])
{
	// to store result
	char board[M][N];
	
	// initalize all cells by 'X'
	for (int i = 0; i < M; i++)
		for (int j = 0; j < N; j++)
			board[i][j] = 'X';
	
	// start from (0, 0) cell
	if (!solveMagnetPuzzle(board, 0, 0, top, left, bottom, right, str))
	{
		cout << "Solution does not exist";
		return;
	}
	
	// print result if given configuration is solvable
	printSolution(board);
}

// main function
int main()
{
	// indicates the count of + or - along the top (+), bottom (-),
	// left (+) and right (-) edges respectively.
	// Value of -1 indicates any number of + or - signs
	int top[N] = { 1, -1, -1, 2, 1, -1 };
	int bottom[N] = { 2, -1, -1, 2, -1, 3 };
	int left[M] = { 2, 3, -1, -1, -1 };
	int right[M] = { -1, -1, -1, 1, -1 };
	
	// rules matrix
	char str[M][N] =
	{
		{ 'L', 'R', 'L', 'R', 'T', 'T' },
		{ 'L', 'R', 'L', 'R', 'B', 'B' },
		{ 'T', 'T', 'T', 'T', 'L', 'R' },
		{ 'B', 'B', 'B', 'B', 'T', 'T' },
		{ 'L', 'R', 'L', 'R', 'B', 'B' }
	};

	solveMagnetPuzzle(top, left, bottom, right, str);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Determine if a pattern matches with a string or not"
                      language="C++"
code={`#include <iostream>
#include <unordered_map>
using namespace std;

// Function to determine if given pattern matches with a string or not
bool match(string str, int i, string pat, int j, auto& map)
{
	int n = str.size(), m = pat.size();

	// base condition
	if (n < m)
		return false;

	// if both pattern and the string reaches end
	if (i == n && j == m)
		return true;

	// if either string o<div className="mb-3">
  <h5 className="mb-2" style={{ color: "#072C71" }}>
    DataStruture Programs on Backtracking
  </h5>
r pattern reaches end
	if (i == n || j == m)
		return false;

	// consider next character from the pattern
	char curr = pat[j];

	// if the character is seen before
	if (map.find(curr) != map.end())
	{
		string s = map[curr];
		int k = s.size();

		// return false if next k characters of the given string
		// doesn't match with s
		if (str.substr(i, k).compare(s))
			return false;

		// recur for remaining characters if next k characters matches
		return match(str, i + k, pat, j + 1, map);
	}

	// process all remaining characters in the string if current character is
	// never seen before
	for (int k = 1; k <= n - i; k++)
	{
		// insert substring formed by next k characters of the string
		// into the map
		map[curr] = str.substr(i, k);

		// check if it leads to the solution
		if (match(str, i + k, pat, j + 1, map))
			return true;

		// else backtrack - remove current character from the map
		map.erase(curr);
	}

	return false;
}

// main function
int main()
{
	// input string and pattern
	string str = "codesleepcode";
	string pat = "XYX";

	// create a map to store mappings between the pattern and string
	unordered_map<char, string> map;

	// check for solution
	if (match(str, 0, pat, 0, map)) {
		for (auto entry: map) {
			cout << entry.first << ": " << entry.second << endl;
		}
	} else {
		cout << "Solution doesn't exist";
	}

	return 0;
}`}
                     />
                     </div>
                     <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                      DataStruture Programs on Binary Tree
                    </h5>


                     <ProgramCard
                      heading="Check if two given binary trees are identical or not | Iterative "
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Recursive function to check if two given binary trees are identical or not
int isIdentical(Node* x, Node* y)
{
    // if both trees are empty, return true
    if (x == nullptr && y == nullptr)
        return 1;

    // if both trees are non-empty and value of their root node matches,
    // recur for their left and right sub-tree
    return (x && y) && (x->key == y->key) &&
			isIdentical(x->left, y->left) &&
			isIdentical(x->right, y->right);
}

// main function
int main()
{
    // construct first tree
    Node* x = nullptr;
    
    x = new Node(15);
    x->left = new Node(10);
    x->right = new Node(20);
    x->left->left = new Node(8);
    x->left->right = new Node(12);
    x->right->left = new Node(16);
    x->right->right = new Node(25);

    // construct second tree
    Node* y = nullptr;
    
    y = new Node(15);
    y->left = new Node(10);
    y->right = new Node(20);
    y->left->left = new Node(8);
    y->left->right = new Node(12);
    y->right->left = new Node(16);
    y->right->right = new Node(25);

    if (isIdentical(x, y))
        cout << "Given binary Trees are identical";
    else
        cout << "Given binary Trees are not identical";

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Calculate height of a binary tree | Iterative "
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Recursive function to calculate height of given binary tree
int height(Node* root)
{
    // Base case: empty tree has height 0
    if (root == nullptr)
        return 0;

    // recur for left and right subtree and consider maximum depth
    return 1 + max(height(root->left), height(root->right));
}

// main function
int main()
{
    Node* root = nullptr;
    
    root = new Node(15);
    root->left = new Node(10);
    root->right = new Node(20);
    root->left->left = new Node(8);
    root->left->right = new Node(12);
    root->right->left = new Node(16);
    root->right->right = new Node(25);

    cout << "The height of the binary tree is " << height(root);

    return 0;
}`}
                     />
                      <ProgramCard
                      heading="Delete given Binary Tree | Iterative "
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Recursive function to delete given binary tree
void deleteBinaryTree(Node* &root)
{
    // Base case: empty tree
    if (root == nullptr)
        return;

    // delete left and right subtree first (Postorder)
    deleteBinaryTree(root->left);
    deleteBinaryTree(root->right);

    // After deleting left and right sub-tree, delete the current node
    delete root;

    // set root as NULL before returning
    root = nullptr;
}

// main function
int main()
{
    Node* root = nullptr;
    
    root = new Node(15);
    root->left = new Node(10);
    root->right = new Node(20);
    root->left->left = new Node(8);
    root->left->right = new Node(12);
    root->right->left = new Node(16);
    root->right->right = new Node(25);

    // delete entire tree
    deleteBinaryTree(root);

    if (root == nullptr)
        cout << "Tree Successfully Deleted";

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Inorder Tree Traversal "
                      language="C++"
code={`// Recursive function to perform in-order traversal of the tree
void inorder(Node *root)
{
	// return if the current node is empty
	if (root == nullptr)
		return;

	// Traverse the left subtree
	inorder(root->left);

	// Display the data part of the root (or current node)
	cout << root->data << " ";

	// Traverse the right subtree
	inorder(root->right);
}`}
                     />
                     <ProgramCard
                      heading="Preorder Tree Traversal "
                      language="C++"
code={`// Recursive function to perform pre-order traversal of the tree
void preorder(Node *root)
{
	// if the current node is empty
	if (root == nullptr)
		return;

	// Display the data part of the root (or current node)
	cout << root->data << " ";

	// Traverse the left subtree
	preorder(root->left);

	// Traverse the right subtree
	preorder(root->right);
}`}
                     />
                     <ProgramCard
                      heading="Postorder Tree Traversal "
                      language="C++"
code={`// Recursive function to perform post-order traversal of the tree
void postorder(Node *root)
{
	// if the current node is empty
	if (root == nullptr)
		return;

	// Traverse the left subtree
	postorder(root->left);

	// Traverse the right subtree
	postorder(root->right);

	// Display the data part of the root (or current node)
	cout << root->data << " ";
}`}
                     />
                     <ProgramCard
                      heading="Level Order Traversal of Binary Tree"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Function to print all nodes of a given level from left to right
bool printLevel(Node* root, int level)
{
    if (root == nullptr)
        return false;

    if (level == 1)
    {
        cout << root->key << " ";

        // return true if at-least one node is present at given level
        return true;
    }

    bool left = printLevel(root->left, level - 1);
    bool right = printLevel(root->right, level - 1);

    return left || right;
}

// Function to print level order traversal of given binary tree
void levelOrderTraversal(Node* root)
{
    // start from level 1 -- till height of the tree
    int level = 1;

    // run till printLevel() returns false
    while (printLevel(root, level))
        level++;
}

// main function
int main()
{
    Node* root = nullptr;

    root = new Node(15);
    root->left = new Node(10);
    root->right = new Node(20);
    root->left->left = new Node(8);
    root->left->right = new Node(12);
    root->right->left = new Node(16);
    root->right->right = new Node(25);

    levelOrderTraversal(root);

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Spiral Order Traversal of Binary Tree"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Function to print all nodes of a given level from left to right
bool printLevelLeftToRight(Node* root, int level)
{
    if (root == nullptr)
        return false;

    if (level == 1)
    {
        cout << root->key << " ";
        return true;
    }

    // process left child before right child
    bool left = printLevelLeftToRight(root->left, level - 1);
    bool right = printLevelLeftToRight(root->right, level - 1);

    return left || right;
}

// Function to print all nodes of a given level from right to left
bool printLevelRightToLeft(Node* root, int level)
{
    if (root == nullptr)
        return false;

    if (level == 1)
    {
        cout << root->key << " ";
        return true;
    }

    // process right child before left child
    bool right = printLevelRightToLeft(root->right, level - 1);
    bool left = printLevelRightToLeft(root->left, level - 1);

    return right || left;
}

// Function to print level order traversal of given binary tree
void spiralOrderTraversal(Node* root)
{
    if (root == nullptr)
        return;

    // start from level 1 -- till height of the tree
    int level = 1;

    // run till either function returns false
    while (printLevelLeftToRight(root, level++) &&
          printLevelRightToLeft(root, level++));
}

// main function
int main()
{
    Node* root = nullptr;
    
    root = new Node(15);
    root->left = new Node(10);
    root->right = new Node(20);
    root->left->left = new Node(8);
    root->left->right = new Node(12);
    root->right->left = new Node(16);
    root->right->right = new Node(25);

    spiralOrderTraversal(root);

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Reverse Level Order Traversal of Binary Tree"
                      language="C++"
code={`#include <iostream>
#include <list>
#include <stack>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Function to print reverse level order traversal of given binary tree
void reverseLevelOrderTraversal(Node* root)
{
    if (root == nullptr)
        return;

    // create an empty queue and enqueue root node
    list<Node*> queue;
    queue.push_back(root);

    // create a stack to reverse level order nodes
    stack<int> stack;

    // pointer to store current node
    Node* curr = nullptr;

    // run till queue is not empty
    while (queue.size())
    {
        // process each node in queue and enqueue their children
        curr = queue.front();
        queue.pop_front();

        // push current node to stack
        stack.push(curr->key);

        // important - process right node before left node
        if (curr->right)
           queue.push_back(curr->right);

        if (curr->left)
           queue.push_back(curr->left);
    }

    // pop all nodes from the stack and print them
    while (!stack.empty())
    {
        cout << stack.top() << " ";
        stack.pop();
    }
}

// main function
int main()
{
    Node* root = nullptr;
    
    root = new Node(15);
    root->left = new Node(10);
    root->right = new Node(20);
    root->left->left = new Node(8);
    root->left->right = new Node(12);
    root->right->left = new Node(16);
    root->right->right = new Node(25);

    reverseLevelOrderTraversal(root);

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Print all nodes of a given binary tree in specific order"
                      language="C++"
code={`#include <iostream>
#include <queue>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Function to print all nodes of a given binary tree in specific
// order from top to bottom
void printNodes(Node* root)
{
    // return is tree is empty
    if (root == nullptr)
        return;

    // print root node
    cout << root->key << " ";

    // create a two empty queues and enqueue root's left and
    // right child respectively
    queue<Node*> Q1, Q2;
    Q1.push(root->left);
    Q2.push(root->right);

    // run till queue is not empty
    while (!Q1.empty())
    {
        // calculate number of nodes in current level
        int n = Q1.size();

        // process every node of current level
        while (n--)
        {
           // pop front node from first queue and print it
           Node* x = Q1.front();
           Q1.pop();

           cout << x->key << " ";

           // push left and right child of x to first queue
           if (x->left)
                Q1.push(x->left);

           if (x->right)
                Q1.push(x->right);


           // pop front node from second queue and print it
           Node* y = Q2.front();
           Q2.pop();

           cout << y->key << " ";

           // push right and left child of y to second queue
           if (y->right)
                Q2.push(y->right);

           if (y->left)
                Q2.push(y->left);
        }
    }
}

// main function
int main()
{
    Node* root = nullptr;
    
    root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(6);
    root->right->right = new Node(7);
    root->left->left->left = new Node(8);
    root->left->left->right = new Node(9);
    root->left->right->left = new Node(10);
    root->left->right->right = new Node(11);
    root->right->left->left = new Node(12);
    root->right->left->right = new Node(13);
    root->right->right->left = new Node(14);
    root->right->right->right = new Node(15);

    printNodes(root);

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Print left view of binary tree"
                      language="C++"
code={`#include <iostream>
#include <list>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Iterative function to print left view of given binary tree
void leftView(Node* root)
{
    // return if tree is empty
    if (root == nullptr)
        return;

    // create an empty queue and enqueue root node
    list<Node*> queue;
    queue.push_back(root);

    // pointer to store current node
    Node* curr = nullptr;

    // run till queue is not empty
    while (!queue.empty())
    {
        // calculate number of nodes in current level
        int size = queue.size();
        int i = 0;

        // process every node of current level and enqueue their
        // non-empty left and right child to queue
        while (i++ < size)
        {
           curr = queue.front();
           queue.pop_front();

           // if this is first node of current level, print it
           if (i == 1)
                cout << curr->key << " ";

           if (curr->left)
                queue.push_back(curr->left);

           if (curr->right)
                queue.push_back(curr->right);
        }
    }
}

// main function
int main()
{
    Node* root = nullptr;
    
    root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->right = new Node(4);
    root->right->left = new Node(5);
    root->right->right = new Node(6);
    root->right->left->left = new Node(7);
    root->right->left->right = new Node(8);

    leftView(root);

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Print Bottom View of Binary Tree"
                      language="C++"
code={`#include <iostream>
#include <map>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Recursive function to do a pre-order traversal of the tree and fill the map
// Here node has 'dist' horizontal distance from the root of the
// tree and level represent level of the node

void printBottom(Node *node, int dist, int level, auto &map)
{
	// base case: empty tree
	if (node == nullptr)
		return;

	// if current level is more than or equal to maximum level seen so far
	// for the same horizontal distance or horizontal distance is seen for 
	// the first time, update the map

	if (level >= map[dist].second)
	{
		// update value and level for current distance
		map[dist] = { node->key, level };
	}

	// recur for left subtree by decreasing horizontal distance and
	// increasing level by 1
	printBottom(node->left, dist - 1, level + 1, map);

	// recur for right subtree by increasing both level and
	// horizontal distance by 1
	printBottom(node->right, dist + 1, level + 1, map);
}

// Function to print the bottom view of given binary tree
void printBottom(Node *root)
{
	// create an empty map where
	// key -> relative horizontal distance of the node from root node and
	// value -> pair containing node's value and its level

	map<int, pair<int, int>> map;

	// do pre-order traversal of the tree and fill the map
	printBottom(root, 0, 0, map);

	// traverse the map and print bottom view
	for (auto it: map)
		cout << it.second.first << " ";
}

// main function
int main()
{
    Node* root = nullptr;

    root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->right = new Node(4);
    root->right->left = new Node(5);
    root->right->right = new Node(6);
    root->right->left->left = new Node(7);
    root->right->left->right = new Node(8);

	printBottom(root);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Print Top View of Binary Tree"
                      language="C++
                      "
code={`#include <iostream>
#include <map>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Recursive function to do a pre-order traversal of the tree and fill the map
// Here node has 'dist' horizontal distance from the root of the
// tree and level represent level of the node
void printTop(Node *root, int dist, int level, auto &map)
{
    // base case: empty tree
    if (root == nullptr)
        return;

	// if current level is less than maximum level seen so far
	// for the same horizontal distance or horizontal distance
	// is seen for the first time, update the map
    if (map.find(dist) == map.end() || level < map[dist].second)
    {
        // update value and level for current distance
        map[dist] = { root->key, level };
    }

    // recur for left subtree by decreasing horizontal distance and
    // increasing level by 1
    printTop(root->left, dist - 1, level + 1, map);

    // recur for right subtree by increasing both level and
    // horizontal distance by 1
    printTop(root->right, dist + 1, level + 1, map);
}

// Function to print the top view of given binary tree
void printTop(Node *root)
{
    // create an empty map where
    // key -> relative horizontal distance of the node from root node and
    // value -> pair containing node's value and its level
    map<int, pair<int, int>> map;

    // do pre-order traversal of the tree and fill the map
    printTop(root, 0, 0, map);

    // traverse the map and print top view
     for (auto it: map)
        cout << it.second.first << " ";
}

// main function
int main()
{
    Node* root = nullptr;

    root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->right = new Node(4);
    root->right->left = new Node(5);
    root->right->right = new Node(6);
    root->right->left->left = new Node(7);
    root->right->left->right = new Node(8);

    printTop(root);

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Check if given binary tree is complete binary tree or not"
                      language="C++"
code={`#include <iostream>
#include <list>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int key;
    Node *left, *right;

    Node(int key)
    {
        this->key = key;
        this->left = this->right = nullptr;
    }
};

// Function to check if given Binary Tree is Complete or not
bool isComplete(Node* root)
{
    // return if tree is empty
    if (root == nullptr)
        return false;

    // create an empty queue and enqueue root node
    list<Node*> queue;
    queue.push_back(root);

    // pointer to store current node
    Node* front = nullptr;

    // flag to mark end of full nodes
    bool flag = false;

    // run till queue is not empty
    while (queue.size())
    {
        // pop front node from the queue
        front = queue.front();
        queue.pop_front();

        // if we have encountered a non-full node before and current node
        // is not a leaf, tree cannot be complete tree
        if (flag && (front->left || front->right))
                return false;

        // if left child is empty & right child exists, tree cannot be complete
        if (front->left == nullptr && front->right)
           return false;

        // if left child exists, enqueue it
        if (front->left)
           queue.push_back(front->left);

        // if current node is a non-full node, set flag to true
        else
           flag = true;


        // if right child exists, enqueue it
        if (front->right)
           queue.push_back(front->right);

        // if current node is a non-full node, set flag to true
        else
           flag = true;
    }

    return true;
}

// main function
int main()
{
    Node* root = nullptr;
    /* Construct below tree
              1
           /    \
          2      3
         / \    / \
        4   5  6   7
    */
    
    root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->left = new Node(4);
    root->left->right = new Node(5);
    root->right->left = new Node(6);
    root->right->right = new Node(7);

    if (isComplete(root))
        cout << "Given binary tree is a Complete Binary Tree";
    else
        cout << "Given binary tree is not a Complete Binary Tree";

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find diameter of a binary tree"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int data;
    Node *left, *right;

    Node(int data)
    {
        this->data = data;
        this->left = this->right = nullptr;
    }
};

// Function to find diameter of the binary tree. Note that the function
// returns the height of the subtree rooted at given node and diameter
// is updated within the function as it is passed by reference
int getDiameter(Node* root, int &diameter)
{
    // base case: tree is empty
    if (root == nullptr)
        return 0;

    // get heights of left and right subtrees
    int left_height = getDiameter(root->left, diameter);
    int right_height = getDiameter(root->right, diameter);

    // calculate diameter "through" the current node
    int max_diameter = left_height + right_height + 1;

    // Update Maximum Diameter (Note that diameter "excluding" the current
    // node in subtree rooted at current node is already updated as we're
    // doing postorder traversal)
    diameter = max(diameter, max_diameter);

    // important - return height of subtree rooted at current node
    return max(left_height, right_height) + 1;
}

int getDiameter(Node* root)
{
    int diameter = 0;
    getDiameter(root, diameter);

    return diameter;    
}

// main function
int main()
{
    Node* root = nullptr;
    
    root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->right = new Node(4);
    root->right->left = new Node(5);
    root->right->right = new Node(6);
    root->right->left->left = new Node(7);
    root->right->left->right = new Node(8);

    cout << "The diameter of the tree is " << getDiameter(root);

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Check if given binary Tree has symmetric structure or not"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int data;
    Node *left, *right;

    Node(int data)
    {
        this->data = data;
        this->left = this->right = nullptr;
    }
};

// Function to check if subtree rooted at X and Y are mirror images
// of each other or not
bool isSymmetric(Node *X, Node *Y)
{
    // base case: if both tree are empty
    if (X == nullptr && Y == nullptr)
        return true;

    // return true if
    // 1. both trees are non-empty and
    // 2. left subtree is mirror image of right subtree and
    // 3. right subtree is mirror image of left subtree
    return (X != nullptr && Y != nullptr) &&
           isSymmetric(X->left, Y->right) &&
           isSymmetric(X->right, Y->left);
}

// Function to check if given binary Tree has a symmetric structure or not
bool isSymmetric(Node *root)
{
    // return true if left subtree and right subtree are
    // mirror images or each other
    return isSymmetric(root->left, root->right);
}

// main function
int main()
{
    Node* root = nullptr;
    /* Construct below tree
         1
       /  \
      /    \
     2      3
      \    /
       5  6
    */

    root = new Node(1);
    root->left = new Node(2);
    root->right = new Node(3);
    root->left->right = new Node(4);
    root->right->left = new Node(5);

    isSymmetric(root)? cout << "Yes": cout << "No";

    return 0;
}`}
                     />
                     <ProgramCard
                      heading="Convert binary tree to its mirror"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Tree node
struct Node
{
    int data;
    Node *left, *right;

    Node(int data)
    {
        this->data = data;
        this->left = this->right = nullptr;
    }
};

// Function to perform preorder traversal of the binary tree
void preorder(Node* root)
{
    if (root == nullptr)
        return;

    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}

// Function to convert given binary Tree to its mirror
bool convertToMirror(Node *root)
{
    // base case: if tree is empty
    if (root == nullptr)
        return true;

    // convert left subtree
    convertToMirror(root->left);

    // convert right subtree
    convertToMirror(root->right);

    // swap left subtree with right subtree
    swap(root->left, root->right);
}

// main function
int main()
{
    Node* root = nullptr;
    /* Construct below tree
          1
        /   \
       /     \
      2       3
     / \     / \
    4   5   6   7   */
    
    root = new Node(1);
	root->left = new Node(2);
	root->right = new Node(3);
	root->left->left = new Node(4);
	root->left->right = new Node(5);
	root->right->left = new Node(6);
	root->right->right = new Node(7);

    convertToMirror(root);
    preorder(root);

    return 0;
}`}
                     />
					 </div>


                     <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                      DataStruture Programs on BST
                    </h5>


                     <ProgramCard
                      heading="Insertion in BST"
                      language="C++"
code={`#include <iostream>
using namespace std;
 
// Data structure to store a Binary Search Tree node
struct Node
{
	int data;
	Node *left, *right;
};
 
// Function to create a new binary tree node having given key
Node* newNode(int key)
{
	Node* node = new Node;
	node->data = key;
	node->left = node->right = nullptr;
 
	return node;
}
 
// Function to perform inorder traversal of the tree
void inorder(Node* root)
{
	if (root == nullptr)
		return;
 
	inorder(root->left);
	cout << root->data << " ";
	inorder(root->right);
}

// Recursive function to insert a key into BST
Node* insert(Node* root, int key)
{
	// if the root is null, create a new node and return it
	if (root == nullptr)
		return newNode(key);
 
	// if given key is less than the root node, recur for left subtree
	if (key < root->data)
		root->left = insert(root->left, key);
 
	// if given key is more than the root node, recur for right subtree
	else
		root->right = insert(root->right, key);
 
	return root;
}

// main function
int main()
{
	Node* root = nullptr;
	int keys[] = { 15, 10, 20, 8, 12, 16, 25 };
 
	for (int key : keys)
		root = insert(root, key);
 
	inorder(root);
 
	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Search given key in BST"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Search Tree node
struct Node
{
	int data;
	Node *left, *right;
};

// Function to create a new binary tree node having given key
Node* newNode(int key)
{
	Node* node = new Node;
	node->data = key;
	node->left = node->right = nullptr;

	return node;
}

// Recursive function to insert a key into BST
Node* insert(Node* root, int key)
{
	// if the root is null, create a new node and return it
	if (root == nullptr)
		return newNode(key);

	// if given key is less than the root node, recur for left subtree
	if (key < root->data)
		root->left = insert(root->left, key);

	// if given key is more than the root node, recur for right subtree
	else
		root->right = insert(root->right, key);

	return root;
}

// Recursive function to search in given BST
void search(Node* root, int key, Node* parent)
{
	// if key is not present in the key
	if (root == nullptr)
	{
		cout << "Key Not found";
		return;
	}

	// if key is found
	if (root->data == key)
	{
		if (parent == nullptr)
			cout << "The node with key " << key << " is root node";

		else if (key < parent->data)
			cout << "Given key is left node of node with key " 
				 << parent->data;

		else cout << "Given key is right node of node with key " 
				 << parent->data;

		return;
	}

	// if given key is less than the root node, recur for left subtree
	// else recur for right subtree

	if (key < root->data)
		return search(root->left, key, root);

	return search(root->right, key, root);
}

// Search given key in BST
int main()
{
	Node* root = nullptr;
	int keys[] = { 15, 10, 20, 8, 12, 16, 25 };

	for (int key : keys)
		root = insert(root, key);

	search(root, 25, nullptr);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Deletion from BST"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Search Tree node
struct Node {
	int data;
	Node *left, *right;
};

// Function to create a new binary tree node having given key
Node* newNode(int key)
{
	Node* node = new Node;
	node->data = key;
	node->left = node->right = nullptr;

	return node;
}

// Function to perform inorder traversal of the BST
void inorder(Node *root)
{
	if (root == nullptr)
		return;

	inorder(root->left);
	cout << root->data << " ";
	inorder(root->right);
}

// Helper function to find minimum value node in subtree rooted at curr 
Node* minimumKey(Node* curr)
{
	while(curr->left != nullptr) {
		curr = curr->left;
	}
	return curr;
}

// Recursive function to insert a key into BST
Node* insert(Node* root, int key)
{
	// if the root is null, create a new node and return it
	if (root == nullptr)
		return newNode(key);

	// if given key is less than the root node, recur for left subtree
	if (key < root->data)
		root->left = insert(root->left, key);

	// if given key is more than the root node, recur for right subtree
	else
		root->right = insert(root->right, key);

	return root;
}

// Iterative function to search in subtree rooted at curr & set its parent
// Note that curr & parent are passed by reference
void searchKey(Node* &curr, int key, Node* &parent)
{
	// traverse the tree and search for the key
	while (curr != nullptr && curr->data != key)
	{
		// update parent node as current node
		parent = curr;

		// if given key is less than the current node, go to left subtree
		// else go to right subtree
		if (key < curr->data)
			curr = curr->left;
		else
			curr = curr->right;
	}
}

// Function to delete node from a BST
void deleteNode(Node*& root, int key)
{
	// pointer to store parent node of current node
	Node* parent = nullptr;

	// start with root node
	Node* curr = root;

	// search key in BST and set its parent pointer
	searchKey(curr, key, parent);

	// return if key is not found in the tree
	if (curr == nullptr)
		return;

	// Case 1: node to be deleted has no children i.e. it is a leaf node
	if (curr->left == nullptr && curr->right == nullptr)
	{
		// if node to be deleted is not a root node, then set its
		// parent left/right child to null
		if (curr != root)
		{
			if (parent->left == curr)
				parent->left = nullptr;
			else
				parent->right = nullptr;
		}
		// if tree has only root node, delete it and set root to null
		else
			root = nullptr;

		// deallocate the memory
		free(curr);	 // or delete curr;
	}

	// Case 2: node to be deleted has two children
	else if (curr->left && curr->right)
	{
		// find its in-order successor node
		Node* successor  = minimumKey(curr->right);

		// store successor value
		int val = successor->data;

		// recursively delete the successor. Note that the successor
		// will have at-most one child (right child)
		deleteNode(root, successor->data);

		// Copy the value of successor to current node
		curr->data = val;
	}

	// Case 3: node to be deleted has only one child
	else
	{
		// find child node
		Node* child = (curr->left)? curr->left: curr->right;

		// if node to be deleted is not a root node, then set its parent
		// to its child
		if (curr != root)
		{
			if (curr == parent->left)
				parent->left = child;
			else
				parent->right = child;
		}

		// if node to be deleted is root node, then set the root to child
		else
			root = child;

		// deallocate the memory
		free(curr);
	}
}

// main function
int main()
{
	Node* root = nullptr;
	int keys[] = { 15, 10, 20, 8, 12, 16 };

	for (int key : keys)
		root = insert(root, key);

	deleteNode(root, 16);
	inorder(root);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Construct balanced BST from given keys"
                      language="C++"
code={`#include <iostream>
#include <algorithm>
using namespace std;

// Data structure to store a Binary Search Tree node
struct Node {
	int data;
	Node *left, *right;
};

// Function to create a new binary tree node having given key
Node* newNode(int key)
{
	Node* node = new Node;
	node->data = key;
	node->left = node->right = nullptr;

	return node;
}

// Function to perform in-order traversal of the tree
void inorder(Node* root)
{
	if (root == nullptr)
		return;

	inorder(root->left);
	cout << root->data << " ";
	inorder(root->right);
}

// Recursive function to insert a key into BST
Node* insert(Node* root, int key)
{
	// if the root is null, create a new node and return it
	if (root == nullptr)
		return newNode(key);

	// if given key is less than the root node, recur for left subtree
	if (key < root->data)
		root->left = insert(root->left, key);

	// if given key is more than the root node, recur for right subtree
	else
		root->right = insert(root->right, key);

	return root;
}

// Function to construct balanced BST from given sorted array
// Note - root of the tree is passed by reference here
void convert(int keys[], int low, int high, Node* &root)
{
	// base case
	if (low > high)
		return;

	// find middle element of current range
	int mid = (low + high) / 2;

	// construct a new node from mid element and assign it to root
	root = newNode(keys[mid]);

	// left subtree of root will be formed by keys less than mid element
	convert(keys, low, mid - 1, root->left);

	// right subtree of root will be formed by keys less than mid element
	convert(keys, mid + 1, high, root->right);
}

// Function to construct balanced BST from given unsorted array
Node* convert(int keys[], int n)
{
	// sort the keys first
	sort(keys, keys + n);

	// construct balanced BST
	Node *root = nullptr;
	convert(keys, 0, n-1, root);

	// return root node of the tree
	return root;
}

// Construct balanced BST from given keys
int main()
{
	// input keys
	int keys[] = { 15, 10, 20, 8, 12, 16, 25 };
	int n = sizeof(keys)/sizeof(keys[0]);

	// construct balanced binary search tree
	Node* root = convert(keys, n);

	// print the keys in in-order fashion
	inorder(root);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Determine if given Binary Tree is a BST or not"
                      language="C++"
code={`#include <iostream>
#include <climits>
using namespace std;

// Data structure to store a Binary Search Tree node
struct Node
{
	int data;
	Node *left, *right;
};

// Function to create a new binary tree node having given key
Node* newNode(int key)
{
	Node* node = new Node;
	node->data = key;
	node->left = node->right = nullptr;

	return node;
}

// Recursive function to insert a key into BST
Node* insert(Node* root, int key)
{
	// if the root is null, create a new node and return it
	if (root == nullptr)
		return newNode(key);

	// if given key is less than the root node, recur for left subtree
	if (key < root->data)
		root->left = insert(root->left, key);

	// if given key is more than the root node, recur for right subtree
	else
		root->right = insert(root->right, key);

	return root;
}

// Function to determine if given Binary Tree is a BST or not by keeping a
// valid range (starting from [MIN_VALUE, MAX_VALUE]) and keep shrinking
// it down for each node as we go down recursively
bool isBST(Node* node, int minKey, int maxKey)
{
	// base case
	if (node == NULL)
		return true;

	// if node's value fall outside valid range
	if (node->data < minKey || node->data > maxKey)
		return false;

	// recursively check left and right subtrees with updated range
	return isBST(node->left, minKey, node->data) &&
			isBST(node->right, node->data, maxKey);
}

// Function to determine if given Binary Tree is a BST or not
void isBST(Node* root)
{
	if(isBST(root, INT_MIN, INT_MAX))
		printf("This is a BST.");
	else
		printf("This is NOT a BST!");
}

// main function
int main()
{
	Node* root = nullptr;
	int keys[] = { 15, 10, 20, 8, 12, 16, 25 };

	for (int key : keys)
		root = insert(root, key);

	// swap nodes
	swap(root->left, root->right);
	isBST(root);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Check if given keys represents same BSTs or not without building the BST"
                      language="C"
code={`#include <stdio.h>
#include <stdlib.h>

// Recursive function to check if X[0..n) and Y[0..n)
// represent same BSTs or not
int isSameBST(int X[], int Y[], int n)
{
	// if no element is present in the array, return true
	if (n == 0)
		return 1;

	// if 1st element differs in both array (root node key),
	// return false
	if (X[0] != Y[0])
		return 0;

	// if array contains only one key, return true
	if (n == 1)
		return 1;

	// take four auxiliary arrays of size n-1 each (as maximum
	// keys in left or right subtree can be n-1)
	int leftX[n-1], rightX[n-1], leftY[n-1], rightY[n-1];

	int k = 0, l = 0, m = 0, o = 0;

	// process remaining keys and divide them into two groups
	for (int i = 1; i < n; i++)
	{
		// leftX[] will contain all elements less than X[0]
		if (X[i] < X[0])
			leftX[k++] = X[i];

		// rightX[] will contain all elements more than X[0]
		else
			rightX[l++] = X[i];

		// leftY[] will contain all elements less than Y[0]
		if (Y[i] < Y[0])
			leftY[m++] = Y[i];

		// rightY[] will contain all elements more than Y[0]
		else
			rightY[o++] = Y[i];
	}

	// return false if size of leftX[] & leftY[] differs i.e.
	// number of nodes in left subtree of both trees differs
	if (k != m)
		return 0;

	// return false if size of rightX[] & rightY[] differs i.e.
	// number of nodes in right subtree of both trees differs
	if (l != o)
		return 0;

	// check left subtree and right subtree
	return isSameBST(leftX, leftY, k) &&
			isSameBST(rightX, rightY, l);
}

// Check if given keys represents same BSTs or not without
// building the BST
int main(void)
{
	int X[] = { 15, 25, 20, 22, 30, 18, 10, 8, 9, 12, 6 };
	int Y[] = { 15, 10, 12, 8, 25, 30, 6, 20, 18, 9, 22 };

	int n = sizeof(X) / sizeof(X[0]);
	int m = sizeof(Y) / sizeof(Y[0]);

	if (m == n && isSameBST(X, Y, n))
		printf("Given keys represent same BSTs");
	else
		printf("Given keys represent different BSTs");

	return 0;
}`}
                     />
                      <ProgramCard
                      heading="Find inorder predecessor for given key in a BST"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Search Tree node
struct Node {
	int data;
	Node *left, *right;
};

// Function to create a new binary tree node having given key
Node* newNode(int key)
{
	Node* node = new Node;
	node->data = key;
	node->left = node->right = nullptr;

	return node;
}

// Recursive function to insert a key into BST
Node* insert(Node* root, int key)
{
	// if the root is null, create a new node and return it
	if (root == nullptr)
		return newNode(key);

	// if given key is less than the root node, recur for left subtree
	if (key < root->data)
		root->left = insert(root->left, key);

	// if given key is more than the root node, recur for right subtree
	else
		root->right = insert(root->right, key);

	return root;
}

// Helper function to find maximum value node in given BST
Node* findMaximum(Node* root)
{
	while (root->right)
		root = root->right;

	return root;
}

// Recursive function to find in-order predecessor for given key in a BST
// Note that predecessor 'prec' is passed by reference to the function
void findPredecessor(Node* root, Node*& prec, int key)
{
	// base case
	if (root == nullptr) {
		prec = nullptr;
		return;
	}

	// if node with key's value is found, the predecessor is maximum value
	// node in its left subtree (if any)
	if (root->data == key)
	{
		if (root->left)
			prec = findMaximum(root->left);
	}

	// if given key is less than the root node, recur for left subtree
	else if (key < root->data)
	{
		findPredecessor(root->left, prec, key);
	}

	// if given key is more than the root node, recur for right subtree
	else
	{
		// update predecessor to current node before recursing 
		// in right subtree
		prec = root;
		findPredecessor(root->right, prec, key);
	}
}

// main function
int main()
{
	/* Construct below tree
               15
             /    \
            /      \
           10       20
          / \      /  \
         /   \    /    \
        8    12  16    25
	*/
	
	int keys[] = { 15, 10, 20, 8, 12, 16, 25 };

	Node* root = nullptr;
	for (int key : keys)
		root = insert(root, key);

	// find in-order predecessor for each key
	for (int key : keys)
	{
		Node* prec = nullptr;
		findPredecessor(root, prec, key);

		if (prec != nullptr)
			cout << "Predecessor of node " << key << " is " << prec->data << '\n';
		else
			cout << "Predecessor doesn't exists for " << key << '\n';
	}

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find Lowest Common Ancestor (LCA) of two nodes in a Binary Search Tree"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Search Tree node
struct Node {
	int data;
	Node *left, *right;
};

// Function to create a new BST node having given key
Node* newNode(int key)
{
	Node* node = new Node;
	node->data = key;
	node->left = node->right = nullptr;

	return node;
}

// Function to perform in-order traversal of the tree
void inorder(Node* root)
{
	if (root == nullptr)
		return;

	inorder(root->left);
	cout << root->data << " ";
	inorder(root->right);
}

// Recursive function to insert a key into BST
Node* insert(Node* root, int key)
{
	// if the root is null, create a new node and return it
	if (root == nullptr)
		return newNode(key);

	// if given key is less than the root node, recur for left subtree
	if (key < root->data)
		root->left = insert(root->left, key);

	// if given key is more than the root node, recur for right subtree
	else
		root->right = insert(root->right, key);

	return root;
}

// Iterative function to search a given key in root
bool search(Node *root, int key)
{
	// traverse the tree and search for the key
	while (root)
	{
		// if given key is less than the current node, go to left
		// subtree else go to right subtree

		if (key < root->data)
			root = root->left;
		else if (key > root->data)
			root = root->right;

		// if key is found return true
		else
			return true;
	}

	// we reach here if the key is not present in the BST
	return false;
}

// Recursive function to find Lowest Common Ancestor of given nodes
// x and y where both x and y are present in the Binary Search Tree
Node *LCARecursive(Node* root, int x, int y)
{
	// base case: empty tree
	if (root == nullptr)
		return nullptr;

	// if both x and y is smaller than root, LCA exists in left subtree
	if (root->data > max(x, y))
		return LCARecursive(root->left, x, y);

	// if both x and y is greater than root, LCA exists in right subtree
	else  if (root->data < min(x, y))
		return LCARecursive(root->right, x, y);

	// if one key is greater (or equal) than root and one key is smaller
	// (or equal) than root, then the current node is LCA
	return root;
}

// Print Lowest Common Ancestor of two nodes in a BST
void LCA(Node* root, int x, int y)
{
	// return if tree is empty or either x or y is not present in the tree
	if(root == nullptr || !search(root, x) || !search(root, y))
		return;

	// lca stores lowest common ancestor of x and y
	Node* lca = LCARecursive(root, x, y);

	// if lowest common ancestor exists, print it
	if (lca != nullptr)
		cout << "LCA is " << lca->data << endl;
	else
		cout << "LCA do not exist\n";
}

int main()
{
	Node* root = nullptr;
	/* Construct below tree
		  15
		 /   \
		/	  \
	   10	  20
	  / \	  / \
	 /   \   /   \
	8	 12 16   25
	*/
	int keys[] = { 15, 10, 20, 8, 12, 16, 25 };

	for (int key : keys)
		root = insert(root, key);

	LCA(root, 8, 12);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Floor and Ceil in a Binary Search Tree"
                      language="C++"
code={`#include <iostream>
#include <iomanip>
using namespace std;

// Data structure to store a Binary Search Tree node
struct Node {
	int data;
	Node *left, *right;
};

// Function to create a new binary tree node having given key
Node* newNode(int key)
{
	Node* node = new Node;
	node->data = key;
	node->left = node->right = nullptr;

	return node;
}

// Recursive function to insert a key into BST
Node* insert(Node* root, int key)
{
	// if the root is null, create a new node and return it
	if (root == nullptr)
		return newNode(key);

	// if given key is less than the root node, recur for left subtree
	if (key < root->data)
		root->left = insert(root->left, key);

	// if given key is more than the root node, recur for right subtree
	else
		root->right = insert(root->right, key);

	return root;
}

// Recursive function to find floor and ceil of a given key in a BST
// Note that floor and ceil is passed by reference to the function
void findFloorCeil(Node* root, Node* &floor, Node* &ceil, int key)
{
	// base case
	if(root == nullptr)
		return;

	// if node with key's value is found, both floor and ceil is equal
	// to the current node
	if (root->data == key)
	{
		floor = root;
		ceil = root;
	}

	// if given key is less than the root node, recur for left subtree
	else if (key < root->data)
	{
		// update ceil to current node before recursing in left subtree
		ceil = root;
		findFloorCeil(root->left, floor, ceil, key);
	}

	// if given key is more than the root node, recur for right subtree
	else
	{
		// update floor to current node before recursing in right subtree
		floor = root;
		findFloorCeil(root->right, floor, ceil, key);
	}
}

// main function
int main()
{
	/* Construct below tree
               8
             /   \
            /     \
           4       10
          / \     /  \
         /   \   /    \
        2     6 9      12
	*/

	int keys[] = { 2, 4, 6, 8, 9, 10, 12 };

	Node* root = nullptr;
	for (int key : keys)
		root = insert(root, key);

	// find Ceil and Floor for each key
	for (int i = 0; i < 15; i++)
	{
		Node *floor = nullptr, *ceil = nullptr;
		findFloorCeil(root, floor, ceil, i);

		cout << setw(2) << i << " --> ";
		cout << setw(4) << (floor? floor->data: -1);
		cout << setw(4) << (ceil? ceil->data: -1) << endl;
	}

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find optimal cost to construct binary search tree"
                      language="C++"
code={`#include <iostream>
#include <climits>
using namespace std;

// Find optimal cost to construct binary search tree from keys
// i to j where each key k occurs freq[k] number of times
int findOptimalCost(int freq[], int i, int j, int level)
{
	// base case
	if (j < i)
		return 0;

	int optimalCost = INT_MAX;

	// consider each key as a root and recursively find optimal solution
	for (int k = i; k <= j; k++)
	{
		// recursively find the optimal cost of left subtree
		int leftOptimalCost = findOptimalCost(freq, i, k - 1, level + 1);

		// recursively find the optimal cost of right subtree
		int rightOptimalCost = findOptimalCost(freq, k + 1, j, level + 1);

		// current node's cost is freq[k]*level
		int cost = freq[k]*level + leftOptimalCost + rightOptimalCost;
		
		// update optimal cost
		optimalCost = min (optimalCost, cost);
	}

	// Return minimum value
	return optimalCost;
}

// main function
int main()
{
	int freq[] = { 25, 10, 20 };
	int n = sizeof(freq) / sizeof(freq[0]);

	cout << "The optimal cost of constructing BST is "
			<< findOptimalCost(freq, 0, n - 1, 1);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Remove nodes from BST that have keys outside the valid range"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Data structure to store a Binary Search Tree node
struct Node
{
	int data;
	Node *left, *right;
};

// Function to create a new binary tree node having given key
Node* newNode(int key)
{
	Node* node = new Node;
	node->data = key;
	node->left = node->right = nullptr;

	return node;
}

// Function to perform inorder traversal of the tree
void inorder(Node* root)
{
	if (root == nullptr)
		return;

	inorder(root->left);
	cout << root->data << " ";
	inorder(root->right);
}

// Recursive function to insert a key into BST
Node* insert(Node* root, int key)
{
	// if the root is null, create a new node and return it
	if (root == nullptr)
		return newNode(key);

	// if given key is less than the root node, recur for left subtree
	if (key < root->data)
		root->left = insert(root->left, key);

	// if given key is more than the root node, recur for right subtree
	else
		root->right = insert(root->right, key);

	return root;
}

// Function to truncate the BST and remove nodes having keys
// outside valid range
Node* truncate(Node* root, int min, int max)
{
	// base case
	if (root == nullptr)
		return root;

	// recursively truncate left and right subtree first
	root->left = truncate(root->left, min, max);
	root->right = truncate(root->right, min, max);

	Node* curr = root;

	// if root's key is smaller than the minimum allowed, delete it
	if (root->data < min)
	{
		root = root->right;
		delete curr;
	}
	// if root's key is larger than the maximum allowed, delete it
	else if (root->data > max)
	{
		root = root->left;
		delete curr;
	}

	return root;
}

// Remove nodes from BST that have keys outside the valid range
int main()
{
	Node* root = nullptr;
	/* Construct below tree
		   15
		 /	\
		/	  \
	   10	  20
	  / \	  / \
	 /   \	/   \
	8	12  16   25
	*/
	int keys[] = { 15, 10, 20, 8, 12, 16, 25 };

	for (int key : keys)
		root = insert(root, key);

	// [9, 12] is valid range
	root = truncate(root, 9, 12);
	inorder(root);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find a pair with given sum in a BST"
                      language="C++"
code={`#include <iostream>
#include <unordered_set>
using namespace std;

// Data structure to store a Binary Search Tree node
struct Node {
	int data;
	Node *left, *right;
};

// Function to create a new binary tree node having given key
Node* newNode(int key)
{
	Node* node = new Node;
	node->data = key;
	node->left = node->right = nullptr;

	return node;
}

// Recursive function to insert a key into BST
Node* insert(Node* root, int key)
{
	// if the root is null, create a new node and return it
	if (root == nullptr)
		return newNode(key);

	// if given key is less than the root node, recur for left subtree
	if (key < root->data)
		root->left = insert(root->left, key);

	// if given key is more than the root node, recur for right subtree
	else
		root->right = insert(root->right, key);

	return root;
}

// Function to find a pair with given sum in given BST
bool findPair(Node* root, int sum, auto &set)
{
	// base case
	if (root == nullptr)
		return false;

	// return true if pair is found in the left subtree else continue
	// processing the node
	if (findPair(root->left, sum, set))
		return true;

	// if pair is formed with current node, print the pair and return true
	if (set.find(sum - root->data) != set.end())
	{
		cout << "Pair found (" << sum - root->data << ", " 
								<< root->data << ")";
		return true;
	}

	// insert current node's value into the set
	else
	{
		set.insert(root->data);
	}

	// search in right subtree
	return findPair(root->right, sum, set);
}

// main function
int main()
{
	int keys[] = { 15, 10, 20, 8, 12, 16, 25 };
	Node* root = nullptr;

	for (int key : keys)
		root = insert(root, key);

	// find pair with given sum
	int sum = 28;

	// create an empty set
	unordered_set<int> set;

	if (!findPair(root, sum, set))
		cout << "Pair do not exists";

	return 0;
}`}
                     />
					 </div>
					  
					 <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                      DataStruture Programs on Divide & Conquer:
                    </h5>

                     <ProgramCard
                      heading="Binary Search"
                      language="C"
code={`#include <stdio.h>

// Iterative implementation of Binary Search Algorithm to return
// the position of target x in the array A of size N
int binarySearch(int A[], int N, int x)
{
	// search space is A[low..high]
	int low = 0, high = N - 1;

	// iterate till search space contains at-least one element
	while (low <= high)
	{
		// find the mid value in the search space and
		// compares it with target value

		int mid = (low + high)/2;	// overflow can happen
		// int mid = low + (high - low)/2;
		// int mid = high - (high - low)/2;

		// target value is found
		if (x == A[mid])
			return mid;

		// if target is less than the mid element, discard all elements
		// in the right search space including the mid element
		else if (x < A[mid])
			high = mid - 1;

		// if target is more than the mid element, discard all elements
		// in the left search space including the mid element
		else
			low = mid + 1;
	}

	// target doesn't exist in the array
	return -1;
}

// Iterative implementation of Binary Search Algorithm
int main(void)
{
	int A[] = { 2, 5, 6, 8, 9, 10 };
	int target = 5;

	int n = sizeof(A)/sizeof(A[0]);
	int index = ninarySearch(A, n, target);

	if (index != -1)
		printf("Element found at index %d", index);
	else
		printf("Element not found in the array");

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find number of rotations in a circularly sorted array"
                      language="C"
code={`#include <stdio.h>

// Function to find the number of times the array is rotated
int findRotationCount(int arr[], int n)
{
	// search space is arr[low..high]
	int low = 0, high = n - 1;

	// iterate till search space contains at-least one element
	while (low <= high)
	{
		// if the search space is already sorted, we have
		// found the minimum element (at index low)
		if (arr[low] <= arr[high])
			return low;

		int mid = (low + high) / 2;

		// find next and previous element of the mid element
		// (in circular manner)
		int next = (mid + 1) % n;
		int prev = (mid - 1 + n) % n;

		// if mid element is less than both its next and previous
		// neighbor, then it is the minimum element of the array

		if (arr[mid] <= arr[next] && arr[mid] <= arr[prev])
			return mid;

		// if arr[mid..high] is sorted and mid is not the minimum element,
		// then pivot element cannot be present in arr[mid..high] and
		// we can discard arr[mid..high] and search in the left half

		else if (arr[mid] <= arr[high])
			high = mid - 1;

		// if arr[low..mid] is sorted then pivot element cannot be present in
		// it and we can discard arr[low..mid] and search in the right half

		else if (arr[mid] >= arr[low])
			low = mid + 1;
	}

	// invalid input
	return -1;
}

// main function
int main(void)
{
	int arr[] = { 8, 9, 10, 2, 5, 6 };
	int n = sizeof(arr) / sizeof(arr[0]);

	int count = findRotationCount(arr, n);
	printf("The array is rotated %d times", count);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Search an element in a circular sorted array"
                      language="C"
code={`#include <stdio.h>

// Function to find an element x in a circularly sorted array
int circularArraySearch(int A[], int n, int x)
{
	// search space is A[low..high]
	int low = 0, high = n - 1;

	// iterate till search space contains at-least one element
	while (low <= high)
	{
		// find the mid value in the search space and
		// compares it with target value
		int mid = (low + high)/2;

		// if target is found, return its index
		if (x == A[mid])
			return mid;

		// if right half (A[mid..high]) is sorted and mid is not
		// the target element
		if (A[mid] <= A[high])
		{
			// compare target with A[mid] and A[high] to know
			// if it lies in A[mid..high] or not
			if (x > A[mid] && x <= A[high])
				low = mid + 1;	// go searching in right sorted half
			else
				high = mid - 1;	// go searching left
		}

		// if left half (A[low..mid]) is sorted and mid is not
		// the target element
		else
		{
			// compare target with A[low] and A[mid] to know
			// if it lies in A[low..mid] or not
			if (x >= A[low] && x < A[mid])
				high = mid - 1;	// go searching in left sorted half
			else
				low = mid + 1;	// go searching right
		}
	}

	// target not found or invalid input
	return -1;
}

// main function
int main(void)
{
	int A[] = {9, 10, 2, 5, 6, 8};
	int target = 5;

	int n = sizeof(A)/sizeof(A[0]);
	int index = circularArraySearch(A, n, target);

	if (index != -1)
		printf("Element found at index %d", index);
	else
		printf("Element not found in the array");

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find first or last occurrence of a given number in a sorted array"
                      language="C"
code={`#include <stdio.h>

// Function to find first occurrence of a given number
// in sorted array of integers
int findFirstOccurrence(int arr[], int N, int x)
{
	// search space is arr[low..high]
	int low = 0, high = N - 1;

	// initialize the result by -1
	int result = -1;

	// iterate till search space contains at-least one element
	while (low <= high)
	{
		// find the mid value in the search space and
		// compares it with target value
		int mid = (low + high)/2;

		// if target is found, update the result and
		// go on searching towards left (lower indices)
		if (x == arr[mid])
		{
			result = mid;
			high = mid - 1;
		}

		// if target is less than the mid element, discard right half
		else if (x < arr[mid])
			high = mid - 1;

		// if target is more than the mid element, discard left half
		else
			low = mid + 1;
	}

	// return the leftmost index or -1 if the element is not found
	return result;
}

// main function
int main(void)
{
	int arr[] = {2, 5, 5, 5, 6, 6, 8, 9, 9, 9};
	int n = sizeof(arr)/sizeof(arr[0]);

	int target = 5;

	int index = findFirstOccurrence(arr, n, target);

	if (index != -1)
		printf("First occurrence of element %d is found at index %d",
				target, index);
	else
		printf("Element not found in the array");

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Count occurrences of a number in a sorted array with duplicates"
                      language="C"
code={`#include <stdio.h>

// Function to find first or last occurrence of a given number in
// sorted array of integers. If searchFirst is true, we return the
// first occurrence of the number else we return its last occurrence
int BinarySearch(int A[], int N, int x, int searchFirst)
{
	// search space is A[low..high]
	int low = 0, high = N - 1;

	// initialize the result by -1
	int result = -1;

	// iterate till search space contains at-least one element
	while (low <= high)
	{
		// find the mid value in the search space and
		// compares it with target value
		int mid = (low + high)/2;

		// if target is found, update the result
		if (x == A[mid])
		{
			result = mid;

			// go on searching towards left (lower indices)
			if (searchFirst)
				high = mid - 1;

			// go on searching towards right (higher indices)
			else
				low = mid + 1;
		}

		// if target is less than the mid element, discard right half
		else if (x < A[mid])
			high = mid - 1;

		// if target is more than the mid element, discard left half
		else
			low = mid + 1;
	}

	// return the found index or -1 if the element is not found
	return result;
}

// Count occurrences of a number in a sorted array with duplicates
int main(void)
{
	int A[] = {2, 5, 5, 5, 6, 6, 8, 9, 9, 9};
	int target = 5;

	int n = sizeof(A)/sizeof(A[0]);
	
	// pass value 1 for first occurrence
	int first = BinarySearch(A, n, target, 1);
	
	// pass value 0 for last occurrence
	int last = BinarySearch(A, n, target, 0);

	int count = last - first + 1;

	if (first != -1)
		printf("Element %d occurs %d times.", target, count);
	else
		printf("Element not found in the array.");

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find smallest missing element from a sorted array"
                      language="C"
code={`#include <stdio.h>

// Function to find smallest missing element in a sorted
// array of distinct non-negative integers
int smallestMissing(int arr[], int low, int high)
{
	// base condition
	if (low > high)
		return low;

	int mid = low + (high - low) / 2;

	// if mid index matches with the mid element, then the mismatch
	// lies on the right half
	if (arr[mid] == mid)
		return smallestMissing(arr, mid + 1, high);
	else
		// mismatch lies on the left half
		return smallestMissing(arr, low, mid - 1);
}

// main function
int main(void)
{
	int arr[] = { 0, 1, 2, 3, 4, 5, 6 };
	int n = sizeof(arr) / sizeof(arr[0]);

	int low = 0, high = n - 1;

	printf("The smallest missing element is %d",
			smallestMissing(arr, low, high));

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find Floor and Ceil of a number in a sorted array"
                      language="C"
code={`#include <stdio.h>

// Function to find ceil of x in sorted array arr[0..n-1]
// i.e. smallest integer greater than or equal to x
int getCeil(int arr[], int n, int x)
{
	// search space is A[low..high]
	int low = 0, high = n - 1, mid;

	// initialize ceil to -1
	int ceil = -1;

	// iterate till search space contains at-least one element
	while (low <= high)
	{
		// find the mid value in the search space
		mid = (low + high) / 2;

		// if x is equal to mid element, it is the ceil
		if (arr[mid] == x)
			return arr[mid];

		// if x is less than the mid element, ceil exists in the
		// sub-array A[low..mid]. We update ceil to the mid element
		// and reduce our search space to left subarray A[low..mid-1]
		else if (x < arr[mid])
		{
			ceil = arr[mid];
			high = mid - 1;
		}

		// if x is more than the mid element, ceil exists in the
		// right sub-array A[mid+1..high]
		else
			low = mid + 1;
	}

	return ceil;
}

// Function to find floor of x in sorted array arr[0..n-1]
// i.e. largest integer less than or equal to x
int getFloor(int arr[], int n, int x)
{
	int low = 0, high = n - 1, mid;

	// initialize floor to -1
	int floor = -1;

	// iterate till search space contains at-least one element
	while (low <= high)
	{
		// find the mid value in the search space
		mid = (low + high) / 2;

		// if x is equal to mid element, it is the floor
		if (arr[mid] == x)
			return arr[mid];

		// if x is less than the mid element, floor exists in the left
		// sub-array A[low..mid-1]
		else if (x < arr[mid])
			high = mid - 1;

		// if x is more than the mid element, floor exists in the
		// sub-array A[mid..high]. We update floor to the mid element
		// and reduce our search space to right subarray A[mid+1..high]
		else
		{
			floor = arr[mid];
			low = mid + 1;
		}
	}

	return floor;
}

// Find Floor and Ceil of a number in a sorted array
int main(void)
{
	int arr[] = { 1, 4, 6, 8, 9 };
	int n = sizeof(arr) / sizeof(arr[0]);

	for (int i = 0; i <= 10; i++)
	{
		printf("Number %d -> ", i);
		printf("ceiling is %d, ", getCeil(arr, n, i));
		printf("floor is %d\n", getFloor(arr, n, i));
	}

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find number of 1’s in a sorted binary array"
                      language="C"
code={`#include <stdio.h>

// Function to find number of 1's in a sorted binary array
int count(int arr[], int n)
{
	// if last element of the array is 0, no ones can
	// be present in it since it is sorted
	if (arr[n - 1] == 0) {
		return 0;
	}

	// if first element of the array is 1, all its elements
	// are ones only since it is sorted
	if (arr[0]) {
		return n;
	}

	// divide array into left and right sub-array and recur
	return count(arr, n/2) + count(arr + n/2, n - n/2);
}

// main function
int main(void)
{
	int arr[] = { 0, 0, 0, 0, 1, 1, 1 };
	int n = sizeof(arr) / sizeof(arr[0]);

	printf("Total number of 1's present are %d", count(arr, n));

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Find the peak element in an array"
                      language="C"
code={`#include <stdio.h>

// Recursive function to find peak in the array
int findPeakElement(int A[], int low, int high, int n)
{
	// find mid element
	int mid = (low + high) / 2;

	// check if mid element is greater than its neighbors
	if ((mid == 0 || A[mid - 1] <= A[mid]) &&
		(mid == n - 1 || A[mid + 1] <= A[mid]))
		return mid;

	// If the left neighbor of mid is greater than the mid element,
	// then find the peak recursively in the left sub-array
	if (mid - 1 >= 0 && A[mid - 1] > A[mid])
		return findPeakElement(A, low, mid - 1, n);

	// If the right neighbor of mid is greater than the mid element,
	// then find the peak recursively in the right sub-array
	return findPeakElement(A, mid + 1, high, n);
}

// main function
int main(void)
{
	int A[] = { 8, 9, 10, 2, 5, 6 };
	int n = sizeof(A) / sizeof(A[0]);

	int index = findPeakElement(A, 0, n - 1, n);
	printf("The peak element is %d", A[index]);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Division of Two Numbers using Binary Search Algorithm"
                      language="C"
code={`#include <stdio.h>
#include <limits.h>

// define infinity as ULONG_MAX
#define INF ULONG_MAX

double abs(double i) {
   return i >= 0 ? i : -i;
}

// Function to perform division of two numbers using binary search algorithm
double divide(double x, double y)
{
	// handle divisibility by 0
	if (y == 0) {
		return INF;		// return infinity
	}

	// set range for result [low, high]. high is set to infinity
	// to handle the case when y < 1, x < result < INF
	double low = 0, high = INF;

	// set accuracy of the result
	double precision = 0.001;

	// store sign of the result
	int sign = 1;
	if (x * y < 0) {
		sign = -1;
	}

	// make both input numbers positive
	x = abs(x);
	y = abs(y);

	while (1)
	{
		// calculate mid
		double mid = low + ((high - low)/2);

		// if y*mid is almost equal to x, return mid
		if (abs(y * mid - x) <= precision)
			return mid * sign;

		// if y*mid is less than x, update low to mid
		if (y * mid < x)
			low = mid;
		else
			// if y*mid is more than x, update high to mid
			high = mid;
	}
}

// Division of two numbers using binary search algorithm
int main(void)
{
	printf("%f", divide(22, 7));

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Exponential search"
                      language="C"
code={`#include <stdio.h>

// Utility function to find minimum of two numbers
int min(int x, int y) {
	return (x < y) ? x : y;
}

// Binary search algorithm to return the position of
// target x in the sub-array arr[low..high]
int BinarySearch(int arr[], int low, int high, int x)
{
	// Base condition (search space is exhausted)
	if (low > high)
		return -1;

	// we find the mid value in the search space and
	// compares it with target value

	int mid = (low + high)/2;	// overflow can happen
	// int mid = low + (high - low)/2;

	// Base condition (target value is found)
	if (x == arr[mid])
		return mid;

	// discard all elements in the right search space
	// including the mid element
	else if (x < arr[mid])
		return BinarySearch(arr, low,  mid - 1, x);

	// discard all elements in the left search space
	// including the mid element
	else
		return BinarySearch(arr, mid + 1,  high, x);
}

// Returns the position of target x in the given array of length n
int ExponentialSearch(int arr[], int n, int x)
{
	int bound = 1;

	// find the range in which the target x would reside
	while (bound < n && arr[bound] < x)
		bound *= 2;	// calculate the next power of 2

	// call binary search on arr[bound/2 .. min(bound, n)]
	return BinarySearch(arr, bound/2, min(bound, n), x);
}

// Exponential search algorithm
int main(void)
{
	int arr[] = {2, 5, 6, 8, 9, 10};
	int target = 9;

	int n = sizeof(arr)/sizeof(arr[0]);
	int index = ExponentialSearch(arr, n, target);

	if (index != -1)
		printf("Element found at index %d", index);
	else
		printf("Element not found in the array");

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Interpolation search"
                      language="C"
code={`#include <stdio.h>

// find out if a target x exists in the sorted array A
// or not using Interpolation search algorithm
int InterpolationSearch(int A[], int n, int x)
{
	// search space is A[low..high]
	int low = 0, high = n - 1, mid;

	while (A[high] != A[low] && x >= A[low] && x <= A[high])
	{
		// estimate mid
		mid = low + ((x - A[low]) * (high - low) / (A[high] - A[low]));

		// target value is found
		if (x == A[mid])
			return mid;

		// discard all elements in the right search space
		// including the mid element
		else if (x < A[mid])
			high = mid - 1;

		// discard all elements in the left search space
		// including the mid element
		else
			low = mid + 1;
	}

	// if target is found
	if (x == A[low])
		return low ;

	// x doesn't exist in the array
	else
		return -1;
}

// Interpolation search algorithm
int main(void)
{
	int A[] = {2, 5, 6, 8, 9, 10};
	int target = 5;

	int n = sizeof(A)/sizeof(A[0]);
	int index = InterpolationSearch(A, n, target);

	if (index != -1)
		printf("Element found at index %d", index);
	else
		printf("Element not found in the array");

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Merge Sort Algorithm"
                      language="C"
code={`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define N 15

// Merge two sorted subarrays arr[low .. mid] and arr[mid + 1 .. high]
void Merge(int arr[], int aux[], int low, int mid, int high)
{
	int k = low, i = low, j = mid + 1;
	
	// While there are elements in the left and right runs
	while (i <= mid && j <= high) 
	{
		if (arr[i] <= arr[j])
			aux[k++] = arr[i++];
		else
			aux[k++] = arr[j++];
	}

	// Copy remaining elements
	while (i <= mid)
		aux[k++] = arr[i++];

	// No need to copy the second half

	// copy back to the original array to reflect sorted order
	for (int i = low; i <= high; i++)
		arr[i] = aux[i];
}

// Sort array arr [low..high] using auxiliary array aux
void MergeSort(int arr[], int aux[], int low, int high)
{
	// Base case
	if (high == low)	// if run size == 1
		return;

	// find mid point
	int mid = (low + ((high - low) >> 1));

	// recursively split runs into two halves until run size == 1,
	// then merge them and return back up the call chain

	MergeSort(arr, aux, low, mid);  	// split / merge left  half
	MergeSort(arr, aux, mid + 1, high); // split / merge right half

	Merge(arr, aux, low, mid, high);	// merge the two half runs
}

// Function to check if arr is sorted in ascending order or not
int isSorted(int arr[])
{
	int prev = arr[0];
	for (int i = 1; i < N; i++) {
		if (prev > arr[i]) {
			printf("MergeSort Fails!!");
			return 0;
		}
		prev = arr[i];
	}

	return 1;
}

// Implementation of Merge Sort Algorithm in C
int main(void)
{
	int arr[N], aux[N];
	srand(time(NULL));

	// generate random input of integers
	for (int i = 0; i < N; i++)
		aux[i] = arr[i] = (rand() % 100) - 50;

	// sort array 'arr' using auxiliary array 'aux'
	MergeSort(arr, aux, 0, N - 1);

	if (isSorted(arr)) {
		for (int i = 0; i < N; i++)
			printf("%d ", arr[i]);
	}

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Quicksort Algorithm"
                      language="C++"
code={`#include <iostream>
#include <algorithm>
using namespace std;

// Partition using Lomuto partition scheme
int Partition(int a[], int start, int end)
{
	// Pick rightmost element as pivot from the array
	int pivot = a[end];

	// elements less than pivot will be pushed to the left of pIndex
	// elements more than pivot will be pushed to the right of pIndex
	// equal elements can go either way
	int pIndex = start;

	// each time we finds an element less than or equal to pivot, pIndex
	// is incremented and that element would be placed before the pivot.
	for (int i = start; i < end; i++)
	{
		if (a[i] <= pivot)
		{
			swap(a[i], a[pIndex]);
			pIndex++;
		}
	}
	// swap pIndex with Pivot
	swap (a[pIndex], a[end]);

	// return pIndex (index of pivot element)
	return pIndex;
}

// Quicksort routine
void quicksort(int a[] ,int start, int end)
{
	// base condition
	if (start >= end)
		return;

	// rearrange the elements across pivot
	int pivot = Partition(a, start, end);

	// recur on sub-array containing elements that are less than pivot
	quicksort(a, start, pivot - 1);

	// recur on sub-array containing elements that are more than pivot
	quicksort(a, pivot + 1, end);
}

// C++ implementation of quicksort algorithm
int main()
{
	int a[] = { 9, -3, 5, 2, 6, 8, -6, 1, 3 };
	int n = sizeof(a)/sizeof(a[0]);

	quicksort(a, 0, n - 1);

	// print the sorted array
	for (int i = 0 ; i < n; i++)
		cout << a[i] << " ";

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Hybrid QuickSort"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Number of elements to be sorted
#define N 1000000

// Number of sorting runs
#define NUM 10

// perform insertion sort on arr[]
void insertionSort(int arr[], int low, int n)
{
	// Start from second element (element at index 0 
	// is already sorted)
	for (int i = low + 1; i <= n; i++) 
	{
		int value = arr[i];
		int j = i;
		
		// Find the index j within the sorted subset arr[0..i-1]
		// where element arr[i] belongs
		while (j > low && arr[j - 1] > value) 
		{
			arr[j] = arr[j - 1];
			j--;
		}
		// Note that subarray arr[j..i-1] is shifted to
		// the right by one position i.e. arr[j+1..i]
		
		arr[j] = value;
	}
}
 
int Partition (int a[], int low, int high)
{
	// Pick rightmost element as pivot from the array
	int pivot = a[high];

	// elements less than pivot will be pushed to the left of pIndex
	// elements more than pivot will be pushed to the right of pIndex
	// equal elements can go either way
	int pIndex = low;	
	
	// each time we finds an element less than or equal to pivot, pIndex
	// is incremented and that element would be placed before the pivot. 
	for (int i = low; i < high; i++)
	{
		if (a[i] <= pivot)
		{
			swap(a[i], a[pIndex]);
			pIndex++;
		}
	}
	// swap pIndex with Pivot
	swap (a[pIndex], a[high]);
	
	// return pIndex (index of pivot element)
	return pIndex;
}

void QuickSort(int a[], int low, int high)
{
	// base condition
	if(low >= high)
		return;

	// rearrange the elements across pivot
	int pivot = Partition(a, low, high);

	// recur on sub-array containing elements that are less than pivot
	QuickSort(a, low, pivot - 1);

	// recur on sub-array containing elements that are more than pivot
	QuickSort(a, pivot + 1, high);
}

void optimizedQuickSort(int A[], int low, int high)
{
	while (low < high) 
	{
		// do insertion sort if 10 or smaller
		if(high - low < 10)
		{
			insertionSort(A, low, high);
			break;
		}
		else 
		{
			int pivot = Partition(A, low, high);
			
			// tail call optimizations - recur on smaller sub-array
			if (pivot - low < high - pivot) {
				optimizedQuickSort(A, low, pivot - 1);
				low = pivot + 1;
			} else {
				optimizedQuickSort(A, pivot + 1, high);
				high = pivot - 1;
			}
		}
	}	
}

int main()
{
	int arr[N], dup[N];
	
	// seed for random input
	srand(time(NULL));
 
	// to measure time taken by optimized and non-optimized Quicksort 
	clock_t begin, end;
	double t1 = 0.0, t2 = 0.0;
	
	// perform Quicksort NUM times and take average
	for(int i = 0; i < NUM; i++)
	{
		// generate random input
		for (int i = 0; i < N; i++)
			dup[i] = arr[i] = rand() % 100000;

		// Perform non-optimized Quicksort on arr
		begin = clock();
		QuickSort(arr, 0, N-1);
		end = clock();

		// calculate time taken by Non-Optimized QuickSort
		t1 += (double)(end - begin) / CLOCKS_PER_SEC;
		
		// Perform Optimized Quicksort on dup[]
		begin = clock();
		optimizedQuickSort(dup, 0, N-1);
		end = clock();

		// calculate time taken by optimized QuickSort
		t2 += (double)(end - begin) / CLOCKS_PER_SEC;
	}

	cout << "Average time taken by Non-Optimized Quicksort: " << t1/NUM;
	cout << "\nAverage time taken by Optimized Quicksort: " << t2/NUM;

	return 0;
}`}
                     />
					 </div>

					 <div className="mb-3">
                    <h5 className="mb-2" style={{ color: "#072C71" }}>
                      DataStruture Programs on Dynamic Programming:
                    </h5>

                      <ProgramCard
                      heading="Longest Common Subsequence "
                      language="C"
code={`#include <iostream>
#include <string>
using namespace std;

// Function to find length of Longest Common Subsequence of
// sequences X[0..m-1] and Y[0..n-1]
int LCSLength(string X, string Y, int m, int n)
{
	// return if we have reached the end of either sequence
	if (m == 0 || n == 0)
		return 0;

	// if last character of X and Y matches
	if (X[m - 1] == Y[n - 1])
		return LCSLength(X, Y, m - 1, n - 1) + 1;

	// else if last character of X and Y don't match
	return max(LCSLength(X, Y, m, n - 1), LCSLength(X, Y, m - 1, n));
}

// Longest Common Subsequence
int main()
{
	string X = "ABCBDAB", Y = "BDCABA";

	cout << "The length of LCS is " <<
			LCSLength(X, Y, X.length(), Y.length());

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Longest Common Subsequence of K-sequences"
                      language="C++"
code={`#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

// Function to return maximum of three integers
int max(int a, int b, int c)
{
	return max(max(a, b), c);
}

// Function to find length of Longest Common Subsequence of
// sequences X[0..m-1], Y[0..n-1] and Z[0..o-1]
int LCSLength(string X, string Y, string Z, int m, int n, int o)
{
	// return if we have reached the end of either sequence
	if (m == 0 || n == 0 || o == 0)
		return 0;

	// if last character of X, Y, Z matches
	if (X[m - 1] == Y[n - 1] && Y[n - 1] == Z[o - 1])
		return LCSLength(X, Y, Z, m - 1, n - 1, o - 1) + 1;

	// else if last character of X, Y, Z don't match
	return max( LCSLength(X, Y, Z, m - 1, n, o),
				LCSLength(X, Y, Z, m, n - 1, o),
				LCSLength(X, Y, Z, m, n, o - 1));
}

// Longest Common Subsequence of K-sequences
int main()
{
	string X = "ABCBDAB", Y = "BDCABA", Z = "BADACB";

	cout << "The length of LCS is " <<
			LCSLength(X, Y, Z, X.length(), Y.length(), Z.length());

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Longest Common Substring problem"
                      language="C++"
code={`#include <iostream>
#include <string>
#include <cstring>
using namespace std;

// Function to find Longest common substring of sequences
// X[0..m-1] and Y[0..n-1]
string LCS(string X, string Y, int m, int n)
{
	int maxlen = 0;			// stores the max length of LCS
	int endingIndex = m;	// stores the ending index of LCS in X

	// lookup[i][j] stores the length of LCS of substring
	// X[0..i-1], Y[0..j-1]
	int lookup[m + 1][n + 1];

	// initialize all cells of lookup table to 0
	memset(lookup, 0, sizeof(lookup));

	// fill the lookup table in bottom-up manner
	for (int i = 1; i <= m; i++)
	{
		for (int j = 1; j <= n; j++)
		{
			// if current character of X and Y matches
			if (X[i - 1] == Y[j - 1])
			{
				lookup[i][j] = lookup[i - 1][j - 1] + 1;

				// update the maximum length and ending index
				if (lookup[i][j] > maxlen)
				{
					maxlen = lookup[i][j];
					endingIndex = i;
				}
			}
		}
	}

	// return Longest common substring having length maxlen
	return X.substr(endingIndex - maxlen, maxlen);
}

// main function
int main()
{
	string X = "ABC", Y = "BABA";
	int m = X.length(), n = Y.length();

	// Find Longest common substring
	cout << "The Longest common substring is " << LCS(X, Y, m, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Longest Palindromic Subsequence using Dynamic Programming"
                      language="C++"
code={`#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

// Function to find the length of Longest Palindromic Subsequence
// of substring X[i..j]
int longestPalindrome(string X, int i, int j)
{
	// base condition
	if (i > j)
		return 0;

	// if string X has only one character, it is palindrome
	if (i == j)
		return 1;

	// if last character of the string is same as the first character
	if (X[i] == X[j])
	{
		// include first and last characters in palindrome
		// and recur for the remaining substring X[i+1, j-1]
		return longestPalindrome(X, i + 1, j - 1) + 2;
	}

	// if last character of string is different to the first character

	// 1. Remove last character and recur for the remaining
	//	substring X[i, j-1]
	// 2. Remove first character and recur for the remaining
	//	substring X[i+1, j]

	// return maximum of the two values
	return max (longestPalindrome(X, i, j - 1),
				longestPalindrome(X, i + 1, j));
}

// Longest Palindromic Subsequence using Dynamic Programming
int main()
{
	string X = "ABBDCACB";
	int n = X.length();

	cout << "The length of Longest Palindromic Subsequence is "
			<< longestPalindrome(X, 0, n - 1);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Longest Repeated Subsequence problem"
                      language="C++"
code={`#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

// Function to find the length of Longest repeated Subsequence
// of substring X[0..m-1] and X[0..n-1]
int LRSLength(string X, int m, int n)
{
	// return if we have reached the end of either string
	if (m == 0 || n == 0)
		return 0;

	// if characters at index m and n matches and index is different
	if (X[m - 1] == X[n - 1] && m != n)
		return LRSLength(X, m - 1, n - 1) + 1;

	// else if characters at index m and n don't match
	return max (LRSLength(X, m, n - 1), LRSLength(X, m - 1, n));
}

// Longest Repeated Subsequence Problem
int main()
{
	string X = "ATACTCGGA";
	int m = X.length();

	cout << "Length of Longest Repeating Subsequence is " <<
			LRSLength(X, m, m);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Longest Increasing Subsequence using Dynamic Programming"
                      language="C++"
code={`#include <iostream>
#include <climits>
using namespace std;

// Function to find length of longest increasing subsequence
int LIS(int arr[], int i, int n, int prev)
{
	// Base case: nothing is remaining
	if (i == n)
		return 0;

	// case 1: exclude the current element and process the
	// remaining elements
	int excl = LIS(arr, i + 1, n, prev);

	// case 2: include the current element if it is greater
	// than previous element in LIS
	int incl = 0;
	if (arr[i] > prev)
		incl = 1 + LIS(arr, i + 1, n, arr[i]);

	// return maximum of above two choices
	return max(incl, excl);
}

// main function
int main()
{
	int arr[] = { 0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15 };
	int n = sizeof(arr) / sizeof(arr[0]);

	cout << "Length of LIS is " << LIS(arr, 0, n, INT_MIN);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Longest Bitonic Subsequence"
                      language="C++"
code={`#include <iostream>
#include <vector>
using namespace std;

// Function to find Longest Bitonic Subsequence in an array
int calculateLBS(vector<int> arr)
{
	// I[i] stores the length of the longest increasing subsequence
	// ending with arr[i]
	vector<int> I(arr.size());

	// D[i] stores the length of the longest decreasing subsequence
	// starting with arr[i]
	vector<int> D(arr.size());

	int n = arr.size() - 1;

	I[0] = 1;
	for (int i = 1; i <= n; i++) {
		for (int j = 0; j < i; j++) {
			if (arr[j] < arr[i] && I[j] > I[i])
				I[i] = I[j];
		}
		I[i]++;
	}

	D[n] = 1;
	for (int i = n - 1; i >= 0; i--) {
		for (int j = n; j > i; j--) {
			if (arr[j] < arr[i] && D[j] > D[i])
				D[i] = D[j];
		}
		D[i]++;
	}

	// consider each element as peak and calculate LBS
	int lbs = 1;
	for (int i = 0; i <= n; i++)
		lbs = max (lbs, I[i] + D[i] - 1);

	return lbs;
}

// main function
int main()
{
	vector<int> arr { 4, 2, 5, 9, 7, 6, 10, 3, 1 };

	cout << "Length of Longest Bitonic Subsequence is " <<
			calculateLBS(arr);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="The Levenshtein distance (Edit distance) problem"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Function to find Levenshtein Distance between string X and Y
// m and n are the number of characters in X and Y respectively
int dist(string X, int m, string Y, int n)
{
	// base case: empty strings (case 1)
	if (m == 0)
		return n;

	if (n == 0)
		return m;

	int cost;

	// if last characters of the strings match (case 2)
	if (X[m - 1] == Y[n - 1])
		cost = 0;
	else
		cost = 1;
	
	return min (min(dist(X, m - 1, Y, n) + 1,  // deletion	(case 3a))
			dist(X, m, Y, n - 1) + 1),		 // insertion (case 3b))
			dist(X, m - 1, Y, n - 1) + cost);  // substitution (case 2 & 3c)
}

// main function
int main()
{
	string X = "kitten", Y = "sitting";

	cout << "The Levenshtein Distance is " << 
			dist(X, X.length(), Y, Y.length());

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Matrix Chain Multiplication"
                      language="C++"
code={`#include <iostream>
#include <climits>
using namespace std;

// Function to find the most efficient way to multiply
// given sequence of matrices
int MatrixChainMultiplication(int dims[], int i, int j)
{
	// base case: one matrix
	if (j <= i + 1)
		return 0;

	// stores minimum number of scalar multiplications (i.e., cost)
	// needed to compute the matrix M[i+1]...M[j] = M[i..j]
	int min = INT_MAX;

	// take the minimum over each possible position at which the
	// sequence of matrices can be split

	/*
		(M[i+1]) x (M[i+2]..................M[j])
		(M[i+1]M[i+2]) x (M[i+3.............M[j])
		...
		...
		(M[i+1]M[i+2]............M[j-1]) x (M[j])
	*/

	for (int k = i + 1; k <= j - 1; k++)
	{
		// recur for M[i+1]..M[k] to get a i x k matrix
		int cost = MatrixChainMultiplication(dims, i, k);

		// recur for M[k+1]..M[j] to get a k x j matrix
		cost += MatrixChainMultiplication(dims, k, j);

		// cost to multiply two (i x k) and (k x j) matrix
		cost +=	dims[i] * dims[k] * dims[j];

		if (cost < min)
			min = cost;
	}

	// return min cost to multiply M[j+1]..M[j]
	return min;
}

// Matrix Chain Multiplication Problem
int main()
{
	// Matrix M[i] has dimension dims[i-1] x dims[i] for i = 1..n
	// input is 10 × 30 matrix, 30 × 5 matrix, 5 × 60 matrix
	int dims[] = { 10, 30, 5, 60 };
	int n = sizeof(dims) / sizeof(dims[0]);

	cout << "Minimum cost is " << MatrixChainMultiplication(dims, 0, n - 1);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="0–1 Knapsack problem"
                      language="C++"
code={`#include <iostream>
#include <climits>
using namespace std;

// Values (stored in array v)
// Weights (stored in array w)
// Number of distinct items (n)
// Knapsack capacity W
int knapSack(int v[], int w[], int n, int W)
{
	// base case: Negative capacity
	if (W < 0)
		return INT_MIN;

	// base case: no items left or capacity becomes 0
	if (n < 0 || W == 0)
		return 0;

	// Case 1. include current item n in knapSack (v[n]) and recur for
	// remaining items (n - 1) with decreased capacity (W - w[n])
	int include = v[n] + knapSack(v, w, n - 1, W - w[n]);

	// Case 2. exclude current item n from knapSack and recur for
	// remaining items (n - 1)
	int exclude = knapSack(v, w, n - 1, W);

	// return maximum value we get by including or excluding current item
	return max (include, exclude);
}

// 0-1 Knapsack problem
int main()
{
	// Input: set of items each with a weight and a value
	int v[] = { 20, 5, 10, 40, 15, 25 };
	int w[] = {  1, 2,  3,  8,  7, 4 };

	// Knapsack capacity
	int W = 10;

	// number of items
	int n = sizeof(v) / sizeof(v[0]);

	cout << "Knapsack value is " << knapSack(v, w, n - 1, W);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Maximize value of the expression"
                      language="C++"
code={`#include <iostream>
#include <climits>
using namespace std;

// Function to print an array arr of size n
void printArray(int arr[], int n)
{
	for (int i = 0; i < n; i++)
		cout << arr[i] << " ";

	cout << endl;
}

// Function to find maximum value of the expression
// (A[s] - A[r] + A[q] - A[p]) where s > r > q > p
int maximizeExpression(int A[], int n)
{
	// create 4 lookup tables and initialize them to INT_MIN
	int L1[n + 1], L2[n], L3[n - 1], L4[n - 2];

	for (int i = 0; i <= n - 3; i++)
		L1[i] = L2[i] = L3[i] = L4[i] = INT_MIN;

	L1[n - 2] = L2[n - 2] = L3[n - 2] = INT_MIN;
	L1[n - 1] = L2[n - 1] = L1[n] = INT_MIN;

	// L1[] stores the maximum value of A[l]
	for (int i = n - 1; i >= 0; i--)
		L1[i] = max(L1[i + 1], A[i]);

	// L2[] stores the maximum value of A[l] - A[k]
	for (int i = n - 2; i >= 0; i--)
		L2[i] = max(L2[i + 1], L1[i + 1] - A[i]);

	// L3[] stores the maximum value of A[l] - A[k] + A[j]
	for (int i = n - 3; i >= 0; i--)
		L3[i] = max(L3[i + 1], L2[i + 1] + A[i]);

	// L4[] stores the maximum value of A[l] - A[k] + A[j] - A[i]
	for (int i = n - 4; i >= 0; i--)
		L4[i] = max(L4[i + 1], L3[i + 1] - A[i]);

	// maximum value would be present at L4[0]
	return L4[0];
}

// Maximize value of the expression
int main()
{
	int A[] = { 3, 9, 10, 1, 30, 40 };
	int n = sizeof(A) / sizeof(A[0]);

	// array should have atleast 4 elements
	if (n >= 4)
		cout << maximizeExpression(A, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Partition problem"
                      language="C++"
code={`#include <iostream>
#include <string>
using namespace std;

// Return true if there exists a subset of arr[] with given sum
bool subsetSum(int arr[], int n, int sum)
{
	// return true if sum becomes 0 (subset found)
	if (sum == 0)
		return true;

	// base case: no items left or sum becomes negative
	if (n < 0 || sum < 0)
		return false;

	// Case 1. include current item in the subset (arr[n]) and recur
	// for remaining items (n - 1) with remaining sum (sum - arr[n])
	bool include = subsetSum(arr, n - 1, sum - arr[n]);
	
	// return true if we get subset by including the current item
	if (include)
		return true;

	// Case 2. exclude current item n from subset and recur for
	// remaining items (n - 1)
	bool exclude = subsetSum(arr, n - 1, sum);

	// return true if we get subset by excluding the current item;
	// false otherwise
	return exclude;
}

// Return true if given array arr[0..n-1] can be divided into two
// subsets with equal sum
bool partition(int arr[], int n)
{
	int sum = 0;
	for (int i = 0; i < n; i++)
		sum += arr[i];

	// return true if sum is even and array can can be divided into
	// two subsets with equal sum
	return !(sum & 1) && subsetSum(arr, n - 1, sum/2);
}

// main function to solve partition problem
int main()
{
	// Input: set of items
	int arr[] = { 7, 3, 1, 5, 4, 8 };

	// number of items
	int n = sizeof(arr) / sizeof(arr[0]);

	if (partition(arr, n))
		cout << "Yes";
	else
		cout << "No";

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Subset sum problem"
                      language="C++"
code={`#include <iostream>
using namespace std;

// Return true if there exists a subarray of array[0..n] with given sum
bool subsetSum(int arr[], int n, int sum)
{
	// return true if sum becomes 0 (subset found)
	if (sum == 0)
		return true;

	// base case: no items left or sum becomes negative
	if (n < 0 || sum < 0)
		return false;

	// Case 1. include current item in the subset (arr[n]) and recur
	// for remaining items (n - 1) with remaining sum (sum - arr[n])
	bool include = subsetSum(arr, n - 1, sum - arr[n]);

	// Case 2. exclude current item n from subset and recur for
	// remaining items (n - 1)
	bool exclude = subsetSum(arr, n - 1, sum);

	// return true if we can get subset by including or excluding the
	// current item
	return include || exclude;
}

// Subset Sum Problem
int main()
{
	// Input: set of items and a sum
	int arr[] = { 7, 3, 2, 5, 8 };
	int sum = 14;

	// number of items
	int n = sizeof(arr) / sizeof(arr[0]);

	if (subsetSum(arr, n - 1, sum))
		cout << "Yes";
	else
		cout << "No";

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Rod Cutting"
                      language="C++"
code={`#include <iostream>
#include <string>
#include <climits>
using namespace std;

// Function to find best way to cut a rod of length n
// where rod of length i has a cost price[i-1]
int rodCut(int price[], int n)
{
	// base case
	if (n == 0)
		return 0;

	int maxValue = INT_MIN;

	// one by one partition the given rod of length n into two parts
	// of length (1, n-1), (2, n-2), (3, n-3), .... (n-1 , 1), (n, 0)
	// and take maximum
	for (int i = 1; i <= n; i++)
	{
		// rod of length i has a cost price[i-1]
		int cost = price[i - 1] + rodCut(price, n - i);

		if (cost > maxValue)
			maxValue = cost;
	}

	return maxValue;
}

// main function
int main()
{
	int length[] = { 1, 2, 3, 4, 5, 6, 7, 8 };	// dummy
	int price [] = { 1, 5, 8, 9, 10, 17, 17, 20 };

	// rod length
	int n = 4;

	cout << "Profit is " << rodCut(price, n);

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Word Break Problem"
                      language="C++"
code={`#include <iostream>
#include <vector>
#include <algorithm> 
using namespace std;

// Function to segment given string into a space-separated 
// sequence of one or more dictionary words
void wordBreak(vector<string> const &dict, string str, string out)
{
	// if we have reached the end of the string,
	// print the output string

	if (str.size() == 0)
	{
		cout << out << endl;
		return;
	}
	
	for (int i = 1; i <= str.size(); i++) 
	{
		// consider all prefixes of current string
		string prefix = str.substr(0, i);

		// if the prefix is present in the dictionary, add prefix to the 
		// output string and recur for remaining string

		if (find(dict.begin(), dict.end(), prefix) != dict.end()) 
			wordBreak(dict, str.substr(i), out + " " + prefix);
	}
}

// Word Break Problem
int main()
{
	// vector of strings to represent dictionary
	// we can also use trie or std::set to store dictionary

	vector<string> dict = { "this", "th", "is", "famous", "Word", "break", 
			"b", "r", "e", "a", "k", "br", "bre", "brea", "ak", "problem" };

	// input string
	string str = "Wordbreakproblem";
	
	wordBreak(dict, str, "");

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="Wildcard Pattern Matching"
                      language="C"
code={`#include <stdio.h>
#include <string.h>

// defines maximum length of pattern or input string
#define LEN 20

// create a DP lookup table
int lookup[LEN][LEN];

// Function that matches input string with given wildcard pattern
int isMatching(char str[], char pattern[], int n, int m)
{
	// If both input string and pattern reaches their end,
	// return true
	if (m < 0 && n < 0)
		return 1;

	// If only pattern reaches its end, return false
	else if (m < 0)
		return 0;

	// If only input string reaches its end, return true
	// if remaining characters in the pattern are all '*'
	else if (n < 0)
	{
		for (int i = 0; i <= m; i++)
			if (pattern[i] != '*')
				return 0;

		return 1;
	}

	// If the sub-problem is encountered for the first time
	if (lookup[m][n] == -1)
	{
		if (pattern[m] == '*')
		{
			// 1. * matches with current characters in input string.
			// Here we will move to next character in the string

			// 2. Ignore * and move to next character in the pattern
			lookup[m][n] = isMatching(str, pattern, n - 1, m) ||
						isMatching(str, pattern, n, m - 1);
		}
		else
		{
			// If the current character is not a wildcard character, it
			// should match with current character in the input string
			if (pattern[m] != '?' && pattern[m] != str[n])
				lookup[m][n] = 0;

			// check if pattern[0..m-1] matches str[0..n-1]
			else
				lookup[m][n] = isMatching(str, pattern, n - 1, m - 1);
		}
	}

	return lookup[m][n];
}

// Wildcard Pattern Matching
int main(void)
{
	char str[] = "xyxzzxy";
	char pattern[] = "x***x?";

	memset(lookup, -1, sizeof(lookup));

	if (isMatching(str, pattern, strlen(str) - 1, strlen(pattern) - 1))
		printf("Match");
	else
		printf("No Match");

	return 0;
}`}
                     />
                     <ProgramCard
                      heading="3 Partition Problem"
                      language="C++"
code={`#include <iostream>
#include <numeric>

// Helper function for solving 3 partition problem
// It return true if there exists three subsets with given sum
bool subsetSum(int S[], int n, int a, int b, int c)
{
	// return true if subset is found
	if (a == 0 && b == 0 && c == 0)
		return true;

	// base case: no items left
	if (n < 0)
		return false;

	// Case 1. current item becomes part of first subset
	bool A = false;
	if (a - S[n] >= 0)
		A = subsetSum(S, n - 1, a - S[n], b, c);
		
	// Case 2. current item becomes part of second subset
	bool B = false;
	if (!A && (b - S[n] >= 0))
		B = subsetSum(S, n - 1, a, b - S[n], c);

	// Case 3. current item becomes part of third subset
	bool C = false;
	if ((!A && !B) && (c - S[n] >= 0))
		C = subsetSum(S, n - 1, a, b, c - S[n]);

	// return true if we get solution
	return A || B || C;
}

// Function for solving 3-partition problem. It return true if given
// set S[0..n-1] can be divided into three subsets with equal sum
bool partition(int S[], int n)
{
	if (n < 3)
		return false;

	// get sum of all elements in the set
	int sum = std::accumulate(S, S + n, 0);

	// return true if sum is divisible by 3 and the set S can
	// be divided into three subsets with equal sum
	return !(sum % 3) && subsetSum(S, n - 1, sum/3, sum/3, sum/3);
}

// main function for 3-partition problem
int main()
{
	// Input: set of integers
	int S[] = { 7, 3, 2, 1, 5, 4, 8 };

	// number of items in S
	int n = sizeof(S) / sizeof(S[0]);

	if (partition(S, n))
		std::cout << "Yes";
	else
		std::cout << "No";

	return 0;
}`}
                     />
                   
                    </div>



             
</div>
</div>
</div>
<div className="col-md-3 mt-4">
<RightSideSection />
<h5 className="mb-4">More Programming Questions</h5>
<RecommendPost
imgsource="python_mcqs.jpeg"
RecPostHading="Python MCQs Questions"
link="/index_python_mcqs"
/>
<RecommendPost
imgsource="java_mcqs.jpeg"
RecPostHading="Java MCQs Questions"
link="/index_java_mcqs"
/>
<RecommendPost
imgsource="datacodelogo.jpeg"
RecPostHading="Programminig Quize Test"
link="/index_quize_tests"
/>
<RecommendPost
imgsource="datacodelogo.jpeg"
RecPostHading="Programminig Quize Test"
link="/index_quize_tests"
/>
<RecommendPost
imgsource="datacodelogo.jpeg"
RecPostHading="Programminig Quize Test"
link="/index_quize_tests"
/>
<RecommendPost
imgsource="datacodelogo.jpeg"
RecPostHading="Programminig Quize Test"
link="/index_quize_tests"
/>
<RecommendPost
imgsource="datacodelogo.jpeg"
RecPostHading="Programminig Quize Test"
link="/index_quize_tests"
/>
                          <Technologies />

</div>
</div>
</div>
      </>
    );
  }
}

export default DatastructurePgramQuestions;
