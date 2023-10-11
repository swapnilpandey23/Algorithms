import java.util.Scanner;
public class primeTillN{
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int low = scanner.nextInt();
        int high = scanner.nextInt();
        //Loop to iterate within a range.
        for(int num = low; num<=high; num++){
            boolean isPrime = true; //Set flag to true

            //Conditional check for prime number.
            if(num<=1){
                isPrime = false;
            }else{
            //If a selected number is a prime or not.
            for(int i=2; i*i<=num; i++){
                if(num % i == 0){
                    //if yes then set flag to false.
                    isPrime = false;
                    break;
                }
            }
        }
        //Print the numbers for which flag remained true, i.e. they didn't get divided at all.
        if(isPrime){
            System.out.println(num + " is a prime number");
        }else{
            System.out.println(num + " is not a prime number.");
        }
        }
        scanner.close();
    }
}