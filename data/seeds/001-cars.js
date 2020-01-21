exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          vin: "2G1WF55EXY9103575",
          make: "Chevrolet",
          model: "Impala",
          year: 2000,
          mileage: 110000,
          transmission: "manual",
          title: "clean"
        },
        {
          vin: "5GAKRDED0CJ396612",
          make: "Buick ",
          model: "Enclave",
          year: 2012,
          mileage: 110000,
          transmission: "auto",
          title: "clean"
        },
        {
          vin: "WVGAV75N69W510474",
          make: "Volkswagen",
          model: "Tiguan",
          year: 2009,
          mileage: 110000,
          transmission: "manual",
          title: "clear"
        }
      ]);
    });
};
