/*
Lab 1 problem of Harvard CS50 X 2023 program.
*/

//Note - printf() after every i/o event is used for debugging purposes only.

//#include <cs50.h>   //CS50 library for taking input, would run in CS50 remote vscode, uncomment when you use.
#include <stdio.h>

int main(void)
{
    int start;  //declaring starting year.
    int end;    //declaring end year.
    int count = 0;  //to keep track of count of total years.
    // TODO: Prompt for start size
    do
    {
        start = get_int("Start size: ");
        // printf("%i\n", start);
    }
    while (start < 9);
    // TODO: Prompt for end size
    do
    {
        end = get_int("End size: ");
        // printf("%i\n", end);
    }
    while (end < start);
    // TODO: Calculate number of years until we reach threshold
    if (start == end)
    {
        printf("Years: %i", 0);
    }
    int i = start;
    while (i < end)
    {
        i = i + ((i / 3) - (i / 4));    //Algorithm to track the actual population of llamas.
        // printf("%i\n", i);
        count++;                        //Updating count of years after every calculation.
        // printf("%i\n", count);
    }
    // TODO: Print number of years
    printf("Years: %i\n", count);
}
