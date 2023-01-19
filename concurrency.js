// whenever we doing multiple jobs without impacting others

//1. mueen => throw the party ==>  ITEM - A ( 5 min)
//2. micheal => ITEM - B ( 10 min)
//3. anant => ITEM - C ( 15 min)

//>>> waiter 1 => takes order and comes back when the order is done =>
// Total  ==> 5 + 10 + 15 = 30 Mins (non concurrent / blocking)

//>>> waiter 2 => takes order submits to kitchen(token), takes another , and another =>
// Total  ==> 15 = 15 Mins (concurrent / non-blocking)