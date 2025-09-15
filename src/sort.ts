//undifined => 값
//[1,undefinded] [1,undifined]
// 1.undefinded 걸러내든가 2. undefinded 안 되게 하던가
//order를 제한할 수 있지 않을까?
export function simpleSort(arr: number[],order='asc'): number[] {
    //order가 추가되었으니 => 정렬을 뒤집어야함
    // 버블 소트 작성 
    const sortedArr = [...arr];
    for (let i = 0; i < sortedArr.length - 1; i++) {
        for (let j = 0; j < sortedArr.length - 1 - i; j++) {
            //수정
            if(order=='asc'){
                if (sortedArr[j] > sortedArr[j + 1]) //bool타입으로 수정!
                    {
                        const temp = sortedArr[j];
                        sortedArr[j] = sortedArr[j + 1];
                        sortedArr[j + 1] = temp;
                    }
                }
            else {
                if (sortedArr[j] < sortedArr[j + 1]) 
                    {
                        const temp = sortedArr[j];
                        sortedArr[j] = sortedArr[j + 1];
                        sortedArr[j + 1] = temp;
                    }
                }
        }
    }
    return sortedArr; 
}
