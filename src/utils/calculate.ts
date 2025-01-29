
export const calculateAccuracyPercentage = (errors:number,total:number):number => {
    if(total === 0){
        return 0
    }
    return ((total - errors) /total) * 100
}

