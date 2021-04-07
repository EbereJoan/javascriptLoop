function count_Down(start,stop,decrease){
    while (start<=stop)
    {
        start+=decrease;
        console.log(start);
    }
}
//output
count_Down(200,1,4)