using System;

namespace Algorithms
{
    public class Converter
    {
        public char ConvertLowerToUpper(char character)
        {
            if (character >= 'a' && character <= 'z')
            {
                // Convert lowercase character to uppercase by subtracting 32 from its ASCII value.
                return (char)(character - 32);
            }
            else
            {
                // If it's not a lowercase character, return it as is.
                return character;
            }
        }

        static void Main()
        {
            Converter converter = new Converter();
            string stringToConvert = "Swapnil";

            // Iterate through the string and convert each character or passing characters one by one to be converted if lowercase.
            foreach (char c in stringToConvert)
            {
                Console.Write(converter.ConvertLowerToUpper(c)); //.Write() becuase while looping it'll print each character on new line.
            }

            Console.WriteLine(); // Add a newline for readability.
        }
    }
}
