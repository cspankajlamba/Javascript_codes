const cars = ["car1", "car2"];
        document.write(cars);
        document.write("<br>");
        const buses = ["bus1", "bus2"];
        document.write(buses);

        // method 1 : concat
        const comb1 = [].concat(cars, buses);
        document.write("<br>");
        document.write(comb1);
        document.write("<br>");
        //method 2 : Spread
        const comb2 = [...cars, ...buses];
        document.write(comb2);
