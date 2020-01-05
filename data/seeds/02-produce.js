
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('produce').del()
    .then(function () {
      // Inserts seed entries
      return knex('produce').insert([
        {id: 1, name: 'tomato', description: 'a glossy red, or occasionally yellow, pulpy edible fruit that is eaten as a vegetable or in salad.', unit_of_measure: 'lb'},
        {id: 2, name: 'cucumber', description: 'a long, green-skinned fruit with watery flesh, usually eaten raw in salads or pickled.', unit_of_measure: 'lb'},
        {id: 3, name: 'cabbage', description: 'a cultivated plant eaten as a vegetable, having thick green or purple leaves surrounding a spherical heart or head of young leaves', unit_of_measure: 'head'},
        {id: 4, name: 'lettuce', description: 'a cultivated plant of the daisy family, with edible leaves that are a usual ingredient of salads. Many varieties of lettuce have been developed with a range of form, texture, and color', unit_of_measure: 'head'},
        {id: 5, name: 'peas', description: 'a spherical green seed that is eaten as a vegetable or as a pulse when dried.', unit_of_measure: 'lb'},
        {id: 6, name: 'bell pepper', description: 'a large green, yellow, orange, or red variety of capsicum which has a mild or sweet flavor and is often eaten raw.', unit_of_measure: 'lb'},
        {id: 7, name: 'squash', description: 'an edible gourd, the flesh of which may be cooked and eaten as a vegetable.', unit_of_measure: 'lb'},
        {id: 8, name: 'garlic', description: 'a strong-smelling pungent-tasting bulb, used as a flavoring in cooking and in herbal medicine.', unit_of_measure: 'lb'},
        {id: 9, name: 'onion', description: 'an edible bulb with a pungent taste and smell, composed of several concentric layers, used in cooking.', unit_of_measure: 'lb'},
        {id: 10, name: 'apple', description: 'the round fruit of a tree of the rose family, which typically has thin red or green skin and crisp flesh. Many varieties have been developed as dessert or cooking fruit or for making cider.', unit_of_measure: 'lb'},
        {id: 11, name: 'banana', description: 'a long curved fruit which grows in clusters and has soft pulpy flesh and yellow skin when ripe.', unit_of_measure: 'lb'}
      ]);
    });
};
