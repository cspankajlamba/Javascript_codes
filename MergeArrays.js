const cars = ["car1", "car2"];
        document.write(cars);
        document.write("<br>");
        const buses = ["bus1", "bus2"];
        document.write(buses);

        // Method 1 : Concatenation Method
        const comb1 = [].concat(cars, buses);
        document.write("<br>");
        document.write(comb1);
        document.write("<br>");
        //Method 2 : Spread Method
        const comb2 = [...cars, ...buses];
        document.write(comb2);
