setInterval( () => {
    if (wire < clipRate * 450){
        if (wireCost < wireBasePrice * 0.8){
            buyWire()
            console.log(`Just bought waya`)
        }
        else if (wire < 2000){
            buyWire()
            console.log(`Just bought waya (emergency)`)
        }
    }
}, 1500);

setInterval( () => {

    if (funds > adCost){
        buyAds()
        console.log(`just bought ads`)
    }
    else if (adCost * 0.5 > clipperCost && clipperCost <= funds){
        makeClipper()
        console.log(`just bought a clipper`)
    }
}, 1500);

setInterval( () => {
    if ( unsoldClips > clipRate * 30 && margin > 0.01){
        lowerPrice();
        console.log(`just lowered price to ${margin}`)
    }
    else{
        raisePrice();
        console.log(`just raised price to ${margin}`)
    }
}, 100);