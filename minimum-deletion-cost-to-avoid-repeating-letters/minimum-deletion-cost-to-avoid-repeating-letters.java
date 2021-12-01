class Solution {
    public int minCost(String s, int[] cost) {
        //corner case;
        if(s == "" || cost == null) return 0;
        
        Stack<Integer> stack = new Stack<>();
        int res = 0;
        char[] chars = s.toCharArray();
        stack.push(0);
        
        for(int i = 1; i < chars.length; i++){
            if(chars[stack.peek()] == chars[i]){
                res += cost[stack.peek()] < cost[i]? cost[stack.peek()] : cost[i];
                if(cost[stack.peek()] < cost[i]){
                    stack.pop();
                    stack.push(i);
                }
                continue;
            }
            stack.push(i);
            
        }
        return res;
    }
}
