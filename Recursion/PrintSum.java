class PrintSum{
    public int printSum(int i , int n){
        if(i > n){
            // System.out.println(sum);
            return 0;
        }
        int sum = i +  printSum(i + 1 , n);
        return sum;
        // System.out.println("Stack getting empty.. "+sum);
    }
    public static void main(String[] args) {
        PrintSum solution = new PrintSum();
        int sum = solution.printSum(1 ,10);
        System.out.println(sum);
    }
}