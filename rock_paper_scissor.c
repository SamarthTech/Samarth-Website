// #include<stdio.h>
// #include<string.h>
// #include<stdlib.h>
// #include<time.h>

// int geneaterandomnumber(int n){
//     srand(time(NULL));
//     return rand()%n;

// }
// int main()
// {
//     // srand(time(NULL)); //srand takes seed asa an input and is defined inside stdlib.h
//     int n;
//     scanf("%d", &n);
//     printf("The random number between 0 to %d is %d\n", n,rand()%n);
//     return 0;
// }

// // //create rock paper scissor game
// // player 1: rock
// // player 2: (computer); scissor--> player 1 gets 1 point;
// // rock vs scissor-rock wins;
// // paper vs scissor-scissor Wins
// // paper vsd rock- paper wins

// // writw a c program to allow a user  to play thsi game three times with computer. log the score of computer and the player.
// // display the name of the winner ar the end;

// // notes:you have to display name of the player during the game. Take input from user.

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <time.h>

int game(char a, char b)
{
    if ((a == 'R' || a == 'r') && (b == 'R' || b == 'r'))
        return 3;
    else if ((a == 'R' || a == 'r') && (b == 'P' || b == 'p'))
        return 2;
    else if ((a == 'R' || a == 'r') && (b == 'S' || b == 's'))
        return 1;
    else if ((a == 'P' || a == 'p') && (b == 'P' || b == 'p'))
        return 3;
    else if ((a == 'P' || a == 'p') && (b == 'R' || b == 'r'))
        return 1;
    else if ((a == 'P' || a == 'p') && (b == 'S' || b == 's'))
        return 2;
    else if ((a == 'S' || a == 's') && (b == 'S' || b == 's'))
        return 3;
    else if ((a == 'S' || a == 's') && (b == 'R' || b == 'r'))
        return 2;
    else if ((a == 'S' || a == 's') && (b == 'P' || b == 'p'))
        return 1;
}
static int e = 0, f = 0, g = 0;
int main()
{
    char name[50];
    printf("Enter your name\n");
    gets(name);
    for (int i = 0; i < 3; i++)
    {
        printf("%d. %s's turn: Enter R or r for Rock, enter P or p for Paper and enter S or s for Scissor\n", i + 1, name);
        char a, b;
        scanf("%c", &a);
        getchar();
        srand(time(NULL));
        printf("Computer's turn: Enter R or r for Rock, enter P or p for Paper and enter S or s for Scissor\n");
        int c = rand() % 3;
        if (c == 0)
        {
            b = 'r';
            printf("Computer entered  %c\n", b);
        }
        else if (c == 1)
        {
            b = 'p';
            printf("Computer entered %c\n", b);
        }
        else
        {
            b = 's';
            printf("Computer entered %c\n", b);
        }
        int d = game(a, b);
        if (d == 1)
            e++;
        else if (d == 2)
            f++;
    }
    if (e > f)
    {
        printf("Total point for %s is %d and for Computer is %d\n", name, e, f);
        printf("%s wins the game", name);
    }
    else if (e < f)
    {
        printf("Total point for %s is %d and for Computer is %d\n", name, e, f);
        printf("Computer wins the game.");
    }
    else
    {
        printf("Total point for %s is %d and for Computer is %d\n", name, e, f);
        printf("Draw");
    }
    return 0;
}
