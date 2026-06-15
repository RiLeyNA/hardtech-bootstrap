// priority: 10

ServerEvents.recipes(event => {
  const replaceShaped = (id, output, pattern, keys) => {
    event.remove({ id: id })
    event.shaped(output, pattern, keys).id(id)
  }

  const replaceShapeless = (id, output, ingredients) => {
    event.remove({ id: id })
    event.shapeless(output, ingredients).id(id)
  }

  const replaceMechanicalCrafting = (id, output, pattern, keys) => {
    event.remove({ id: id })
    event.custom({
      type: 'create:mechanical_crafting',
      pattern: pattern,
      key: keys,
      result: output
    }).id(id)
  }

  replaceShaped('hardtech_hbm:machine/burner_press', 'hardtech_hbm:burner_press', [
    'SAS',
    'THC',
    'SFS'
  ], {
    S: '#forge:ingots/steel',
    A: 'create:andesite_alloy',
    T: 'immersiveengineering:treated_wood_horizontal',
    H: 'immersiveengineering:hammer',
    C: '#forge:ingots/copper',
    F: 'minecraft:blast_furnace'
  })

  replaceShaped('hardtech_hbm:machine/coal_generator', 'hardtech_hbm:coal_generator', [
    'PCP',
    'RFR',
    'PSP'
  ], {
    P: '#forge:plates/steel',
    C: 'immersiveengineering:wirecoil_copper',
    R: 'minecraft:redstone',
    F: 'minecraft:blast_furnace',
    S: 'create:shaft'
  })

  replaceShaped('hardtech_hbm:machine/battery_box', 'hardtech_hbm:battery_box', [
    'PCP',
    'LBL',
    'PCP'
  ], {
    P: '#forge:plates/steel',
    C: 'immersiveengineering:wirecoil_copper',
    L: '#forge:ingots/lead',
    B: 'immersiveengineering:component_iron'
  })

  replaceShaped('hardtech_hbm:machine/electric_furnace', 'hardtech_hbm:electric_furnace', [
    'PCP',
    'BFB',
    'PGP'
  ], {
    P: '#forge:plates/steel',
    C: 'immersiveengineering:wirecoil_copper',
    B: 'hardtech_hbm:battery_box',
    F: 'minecraft:blast_furnace',
    G: 'hardtech_hbm:coal_generator'
  })

  replaceShaped('hardtech_hbm:machine/shredder', 'hardtech_hbm:shredder', [
    'CAC',
    'GEG',
    'PAP'
  ], {
    C: 'create:cogwheel',
    A: '#forge:plates/advanced_alloy',
    G: 'create:shaft',
    E: 'hardtech_hbm:electric_furnace',
    P: '#forge:plates/steel'
  })

  replaceShaped('hardtech_hbm:machine/centrifuge', 'hardtech_hbm:centrifuge', [
    'CAC',
    'SBS',
    'PAP'
  ], {
    C: 'create:cogwheel',
    A: '#forge:plates/aluminium',
    S: 'create:shaft',
    B: 'hardtech_hbm:battery_box',
    P: '#forge:plates/steel'
  })

  replaceShaped('mekanism:steel_casing', 'mekanism:steel_casing', [
    'PAP',
    'COC',
    'PAP'
  ], {
    P: '#forge:plates/steel',
    A: '#forge:plates/advanced_alloy',
    C: 'immersiveengineering:component_steel',
    O: '#forge:ingots/osmium'
  })

  replaceShaped('mekanism:metallurgic_infuser', 'mekanism:metallurgic_infuser', [
    'OAO',
    'RER',
    'OCO'
  ], {
    O: '#forge:ingots/osmium',
    A: 'create:precision_mechanism',
    R: '#forge:dusts/redstone',
    E: 'hardtech_hbm:electric_furnace',
    C: 'mekanism:steel_casing'
  })

  replaceShaped('mekanism:enrichment_chamber', 'mekanism:enrichment_chamber', [
    'ACA',
    'SXS',
    'APA'
  ], {
    A: '#forge:plates/advanced_alloy',
    C: '#forge:circuits/basic',
    S: 'hardtech_hbm:shredder',
    X: 'mekanism:steel_casing',
    P: '#forge:plates/steel'
  })

  replaceShaped('mekanism:crusher', 'mekanism:crusher', [
    'RCR',
    'SXS',
    'RER'
  ], {
    R: '#forge:dusts/redstone',
    C: '#forge:circuits/basic',
    S: 'hardtech_hbm:shredder',
    X: 'mekanism:steel_casing',
    E: 'mekanism:enrichment_chamber'
  })

  replaceShaped('pneumaticcraft:pressure_chamber_wall', Item.of('pneumaticcraft:pressure_chamber_wall', 16), [
    'SIS',
    'I I',
    'SIS'
  ], {
    S: '#forge:plates/steel',
    I: 'pneumaticcraft:reinforced_bricks'
  })

  replaceShapeless('pneumaticcraft:pressure_chamber_interface', Item.of('pneumaticcraft:pressure_chamber_interface', 2), [
    'minecraft:hopper',
    'pneumaticcraft:pressure_chamber_wall',
    'pneumaticcraft:pressure_chamber_wall',
    'immersiveengineering:component_iron'
  ])

  replaceShaped('pneumaticcraft:air_compressor', 'pneumaticcraft:air_compressor', [
    'SPS',
    'CFT',
    'SGS'
  ], {
    S: '#forge:plates/steel',
    P: 'pneumaticcraft:pressure_tube',
    C: 'immersiveengineering:component_iron',
    F: 'minecraft:furnace',
    T: 'hardtech_hbm:coal_generator',
    G: 'pneumaticcraft:pressure_chamber_wall'
  })

  replaceShaped('pneumaticcraft:refinery', 'pneumaticcraft:refinery', [
    'SFS',
    'TBT',
    'SFS'
  ], {
    S: 'pneumaticcraft:reinforced_stone_slab',
    F: 'immersiveengineering:fluid_pipe',
    T: 'hardtech_hbm:fluid_tank',
    B: 'hardtech_hbm:battery_box'
  })

  replaceShaped('pneumaticcraft:thermopneumatic_processing_plant', 'pneumaticcraft:thermopneumatic_processing_plant', [
    'SBS',
    'TPT',
    'SCS'
  ], {
    S: 'pneumaticcraft:reinforced_stone_slab',
    B: 'hardtech_hbm:simple_boiler',
    T: 'hardtech_hbm:steam_tank',
    P: 'pneumaticcraft:pressure_tube',
    C: 'hardtech_hbm:simple_turbine'
  })

  replaceShaped('ae2:network/blocks/energy_energy_cell', 'ae2:energy_cell', [
    'PFP',
    'FBF',
    'PFP'
  ], {
    P: '#forge:plates/advanced_alloy',
    F: 'ae2:fluix_crystal',
    B: 'hardtech_hbm:battery_box'
  })

  replaceShaped('ae2:network/blocks/storage_drive', 'ae2:drive', [
    'PEP',
    'C C',
    'PHP'
  ], {
    P: '#forge:plates/steel',
    E: 'ae2:engineering_processor',
    C: 'ae2:fluix_glass_cable',
    H: 'hardtech_hbm:centrifuge'
  })

  replaceShaped('ae2:network/blocks/controller', 'ae2:controller', [
    'AFA',
    'EBE',
    'AFA'
  ], {
    A: '#forge:plates/advanced_alloy',
    F: 'ae2:fluix_crystal',
    E: 'immersiveengineering:component_electronic_adv',
    B: 'hardtech_hbm:battery_box'
  })

  replaceShapeless('ae2:network/parts/terminals', 'ae2:terminal', [
    'ae2:formation_core',
    '#ae2:illuminated_panel',
    'ae2:logic_processor',
    'ae2:annihilation_core',
    'create:precision_mechanism'
  ])

  replaceShaped('ae2:network/blocks/interfaces_interface', 'ae2:interface', [
    'PEP',
    'AFH',
    'PEP'
  ], {
    P: '#forge:plates/steel',
    E: 'immersiveengineering:component_electronic',
    A: 'ae2:annihilation_core',
    F: 'ae2:formation_core',
    H: 'hardtech_hbm:shredder'
  })

  replaceShaped('ae2:network/blocks/pattern_providers_interface', 'ae2:pattern_provider', [
    'PEP',
    'AFH',
    'PTP'
  ], {
    P: '#forge:plates/steel',
    E: 'immersiveengineering:component_electronic',
    A: 'ae2:annihilation_core',
    F: 'ae2:formation_core',
    H: 'hardtech_hbm:shredder',
    T: 'minecraft:crafting_table'
  })

  replaceShaped('createaddition:crafting/capacitor_1', 'createaddition:capacitor', [
    'Z',
    'C',
    'T'
  ], {
    Z: '#forge:plates/zinc',
    C: '#forge:plates/lead',
    T: 'minecraft:redstone_torch'
  })

  replaceShaped('createaddition:crafting/capacitor_2', 'createaddition:capacitor', [
    'C',
    'Z',
    'T'
  ], {
    C: '#forge:plates/copper',
    Z: '#forge:plates/lead',
    T: 'minecraft:redstone_torch'
  })

  replaceShapeless('createaddition:crafting/portable_energy_interface', 'createaddition:portable_energy_interface', [
    'create:brass_casing',
    'create:chute',
    'createaddition:copper_spool',
    'hardtech_hbm:battery_box'
  ])

  replaceShaped('createaddition:crafting/modular_accumulator_electrum', 'createaddition:modular_accumulator', [
    ' R ',
    'CBC',
    ' W '
  ], {
    R: '#forge:rods/copper',
    B: 'hardtech_hbm:thermal_buffer',
    C: 'createaddition:capacitor',
    W: '#forge:wires/electrum'
  })

  replaceShaped('createaddition:crafting/modular_accumulator_gold', 'createaddition:modular_accumulator', [
    ' R ',
    'CBC',
    ' W '
  ], {
    R: '#forge:rods/copper',
    B: 'hardtech_hbm:thermal_buffer',
    C: 'createaddition:capacitor',
    W: '#forge:wires/gold'
  })

  replaceMechanicalCrafting('createaddition:mechanical_crafting/alternator', { item: 'createaddition:alternator' }, [
    '  A  ',
    ' ISI ',
    'ISRSI',
    ' ICI ',
    '  T  '
  ], {
    A: { item: 'create:andesite_alloy' },
    I: { tag: 'forge:plates/iron' },
    S: { item: 'createaddition:copper_spool' },
    R: { tag: 'forge:rods/iron' },
    C: { item: 'createaddition:capacitor' },
    T: { item: 'hardtech_hbm:simple_turbine' }
  })

  replaceMechanicalCrafting('createaddition:mechanical_crafting/electric_motor', { item: 'createaddition:electric_motor' }, [
    '  A  ',
    ' BSB ',
    'BSRSB',
    ' BCB ',
    '  E  '
  ], {
    A: { item: 'create:andesite_alloy' },
    B: { tag: 'forge:plates/brass' },
    S: { item: 'createaddition:copper_spool' },
    R: { tag: 'forge:rods/iron' },
    C: { item: 'createaddition:capacitor' },
    E: { item: 'hardtech_hbm:battery_box' }
  })

  replaceShaped('immersivepetroleum:seismic_survey_tool', 'immersivepetroleum:seismic_survey', [
    'SBH',
    'SBS',
    'MLM'
  ], {
    S: 'immersiveengineering:steel_scaffolding_standard',
    B: 'immersiveengineering:gunpart_barrel',
    H: 'immersiveengineering:gunpart_hammer',
    M: 'immersiveengineering:component_steel',
    L: 'hardtech_hbm:fluid_tank'
  })

  replaceShaped('immersivepetroleum:gas_generator', 'immersivepetroleum:gas_generator', [
    'PSP',
    'TGC',
    'PBP'
  ], {
    P: '#forge:plates/steel',
    S: 'hardtech_hbm:steam_tank',
    T: 'hardtech_hbm:simple_turbine',
    G: 'immersiveengineering:generator',
    C: 'immersiveengineering:capacitor_lv',
    B: 'hardtech_hbm:battery_box'
  })

  replaceShaped('mekanismgenerators:generator/gas_burning', 'mekanismgenerators:gas_burning_generator', [
    'OAO',
    'XCT',
    'OAO'
  ], {
    O: '#forge:ingots/osmium',
    A: '#mekanism:alloys/infused',
    X: 'mekanism:steel_casing',
    C: 'mekanism:electrolytic_core',
    T: 'hardtech_hbm:simple_turbine'
  })

  replaceShaped('mekanismgenerators:fission_reactor/casing', Item.of('mekanismgenerators:fission_reactor_casing', 4), [
    'LAL',
    'RCR',
    'LAL'
  ], {
    L: '#forge:ingots/lead',
    A: '#forge:plates/advanced_alloy',
    R: 'hardtech_hbm:simple_fission_reactor',
    C: 'mekanism:steel_casing'
  })

  replaceShaped('mekanismgenerators:turbine/casing', Item.of('mekanismgenerators:turbine_casing', 4), [
    ' S ',
    'TCT',
    ' S '
  ], {
    S: '#forge:ingots/steel',
    T: 'hardtech_hbm:simple_turbine',
    C: 'hardtech_hbm:steam_tank'
  })
})
