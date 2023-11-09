import java.util.ArrayList;
import java.util.Collections;
public class DecimalToBinary
{
	public static void main(String[] args) {
	    ArrayList <Integer> list = new ArrayList<>();
	    int num = 125;
	    int rem = 0;
        //Dividing by 2 to get the binary, Divide by 10 to get the reversed decimal number.
	    while(num != 0){
	        rem = num % 2;  //Store the remainder, binary digit.
	        list.add(rem);
	        num = num / 2;  //Shortens the number per iteration by 1 digit.
	    } 
        //Because the number will come out as reversed due to right to left outcomes.
	    Collections.reverse(list);
	    System.out.println(list);
	}
}
