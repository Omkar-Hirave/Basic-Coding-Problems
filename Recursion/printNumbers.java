class PrintNumbers{
    public void printNumbers1(int n){
        if(n == 0){
            return;
        }
        printNumbers1(n-1);
        System.out.println("Num-> "+n);

    }
    public void printNumbers2(int n){
        if(n == 0){
            return;
        }
        System.out.println("Num-> "+n);
        printNumbers2(n-1);

    }
    public static void main(String[] args) {
        PrintNumbers num = new PrintNumbers();
        System.out.println("Elements in the ascending order are ");
        num.printNumbers1(10);
        System.out.println("Elements in the descending order are ");
        num.printNumbers2(10);
    }
}
