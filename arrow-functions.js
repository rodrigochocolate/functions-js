const materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
]

materials.map((item, index) => {
  materials[index] = materials[index].toUpperCase()
})

console.log(materials)