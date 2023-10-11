import java.util.Scanner;
public class isPrime{
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the number of operations you wish to perform : ");
        int numOfOp = scanner.nextInt();    //input desired number of operations for the prime check.
        System.out.println("Enter the numbers to check prime or not, Hit enter after each number : ");
        //A loop to take input of the numbers as desired.
        for(int i=0; i<numOfOp; i++){
            int num = scanner.nextInt();

            int counter = 0;
            // A loop to check if each number entered  i prime or not.
            for(int j=2; j*j<=num; j++){
                //Since, we are dividing from 2 to square root of each num, If num gets divided even once (because we are not reaching to the num itself), it's not a prime num.
                if(num % j == 0){
                    counter++;
                    break;
                }
            }
            //Therefore, if counter is 0 it's a prime.
            if(counter == 0){
                System.out.println(num + " is a prime number.");
            }else{
                System.out.println(num + " is not a prime number.");
            }
        }
        scanner.close();

        /*
         * Why square root of number?
         * You perform factorization of desired number, e.g. 36, 1*36, 2*18, 3*12, 4*9, 6*6, 9*6, 12*3, 18*2, 36*1.
         * What did you notice?
         * After sqaure root of 36, i.e. 6*6, factors are repeating, Thus, 2 to sqrt(num).
         */
    }
}