import java.util.Scanner;

public class Knapsackgreedy {
    public static void main(String[] args) {
        int i, j = 0, n;
        float sum = 0, max, m;
        Scanner sc = new Scanner(System.in);
        float profit[][] = new float[1][20];
        float weight[][] = new float[1][20];
        System.out.println("Enter no of items");
        n = sc.nextInt();
        System.out.println("Enter the weights of each items");
        for (i = 0; i < n; i++)
            weight[0][i] = sc.nextInt();
        System.out.println("Enter the profit of each items");
        for (i = 0; i < n; i++)
            profit[0][i] = sc.nextInt();
        System.out.println("Enter capacity of knapsack :");
        m = sc.nextInt();
        while (m >= 0) {
            max = 0;
            for (i = 0; i < n; i++) {
                if ((profit[0][i] / weight[0][i]) > max) {
                    max = profit[0][i] / weight[0][i];
                    j = i;
                }
            }
            if (weight[0][j] > m) {
                System.out.println("Fraction of item number: " + (j + 1) + " added is " + m);
                sum = sum + m * max;
                m = -1;
            } else {
                System.out.println("Quantity of item number: " + (j + 1) + " added is " + weight[0][j]);
                m = m - weight[0][j];
                sum = sum + profit[0][j];
                profit[0][j] = 0;
            }
        }
        System.out.println("The total profit is " + sum);
    }
}