#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *input, *posFile, *negFile;
    int number;

    input = fopen("gg.txt", "r");
    if (input == NULL) {
        printf("Cannot open gg.txt\n");
        return 1;
    }

    posFile = fopen("positive_numbers.txt", "w");
    negFile = fopen("negative_numbers.txt", "w");

    if (posFile == NULL || negFile == NULL) {
        printf("Cannot open output files\n");
        return 1;
    }

    while (fscanf(input, "%d", &number) != EOF) {
        if (number >= 0) {
            fprintf(posFile, "%d\n", number);
        } else {
            fprintf(negFile, "%d\n", number);
        }
    }

    fclose(input);
    fclose(posFile);
    fclose(negFile);

    printf("Done!\n");
    return 0;
}
