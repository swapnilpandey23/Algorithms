package Leet;

// Searching peak in mountain is, searching the largest element (peak) in an array (mountain).
public class SearchPeakInMountain {
    public static void main(String[] args) {
        int [] arr = {0,1,2,4,6,65,63,62,61,55,49,0};
        System.out.println(findingPeak(arr));
    }
    // Finding the peak in the array.
    // Using binary search algorithm for it.
    static int findingPeak(int[] arr){
        int start = 0;
        int end = arr.length-1;

        while(start < end){
            // identifying middle element of the array.
            int mid = start + (end - start) / 2;

            if(arr[mid] > arr[mid+1]){
                // this may be our potential answer, but look for all the possibilities in the array.
                end = mid;
            }else {
                // If my middle is smaller than the next element, then operate from next element directly, rather making middle a new start.
                start = mid + 1;
            }
        }
        // In the end, when our loop would terminate, it'd terminate on the condition if start == end, and that would be our best possible answer.
        // Also, every check above is checking for the largest element (peak) in the array.

        return start; // We can return end as well.
    }

}
