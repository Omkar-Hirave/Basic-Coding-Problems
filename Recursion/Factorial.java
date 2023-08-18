public class Factorial {
    public void factorial(int i, int num, int product) {
        if (i > num) {
            System.out.println(product);
            return;
        }
        product = product * i;
        factorial(i + 1, num, product);
        System.out.println("How many time function worked---> "+i);
    }

    public static void main(String[] args) {
        Factorial solution = new Factorial();
        solution.factorial(1, 5, 1);
    }
}
