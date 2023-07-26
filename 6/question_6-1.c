#include <stdio.h>
#include <string.h>
#include <ctype.h>

void reverse(char *str);
char *is_palindrome(char *str);
int main()
{
    char str[] = "madam";
    char str2[] = "Hello World";
    
    char *s = is_palindrome(str);
    char *s2 = is_palindrome(str2);
    printf("%s\n", s);
    printf("%s\n", s2);
    return 0;
}
/**
* reverse: reverse a string
* @str: string to reverse
*/
void reverse(char *str)
{
    int i = 0;
    int j = strlen(str) - 1;
    
    while(i < j)
    {
        char temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++;
        j--;
    }
}

/**
* is_palindrome: check if string is pallindrome
* @str: string to check if pallindrome
* Return: string - either reversed or as is
*/
char *is_palindrome(char *str)
{
    int i = 0;
    int j = strlen(str) - 1;
    
    while(i < j)
    {
        char first = tolower(str[i]);
        char second = tolower(str[j]);
        if(first != second)
        {
            reverse(str);
            return str;
        }
        i++;
        j--;
    }
    return str;
}
