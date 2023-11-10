package Leet;

public class SearchInfiniteArray {
    public static void main(String[] args) {
        int[] arr = {2,5,9,10,12,15,17,19,21,24,36,77,79,80,81,83,85,97,100,110,115,120,124,126,127};
        int target = 77;
        System.out.println(createChunk(arr,target));
    }
    /* Since, the array is infinite, we can't use arr.length, hence we can create the chunks of the array by doubling the
       length of the array per iteration. */

    static int createChunk(int[] arr, int target){
        // initializing the first chunk of the array.
        int start = 0;
        int end = 1;

        // handling exception
        if(target < arr[0]){
            return -1;
        }

        // modifying the upcoming chunks of the arrays, if condition is not satisfied.
        while(target > arr[end]){
            int temp = end + 1;     // new start of the next chunk of the array
            end = end + (end - start + 1) * 2;      // to calculate the double of the present array. (+1 because of the indexing).
            start = temp;   // assigning temp start to start.
        }

        return binarySearch(arr,target,start,end);
    }

    // Binary search implementation of selected chunk.
    static int binarySearch(int[] arr, int target, int start, int end) {

        while(start <= end){
            int mid = start + (end - start) / 2;

            if(target == arr[mid]){
                return mid;
            }else if(target > arr[mid]){
                start = mid + 1;
            }else{
                end = mid - 1;
            }
        }
        return -1;
    }

}

