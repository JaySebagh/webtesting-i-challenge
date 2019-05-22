const enhancer = require('./enhancer.js');
// test away!

it('repair', () => {
    expect(enhancer.repair({
        name: "Kzarka",
        enhancement: 10,
        durability: 20
    })).toEqual({
        name: "Kzarka",
        enhancement: 10,
        durability: 100
    })
})

it('success enhancement 15 to 16', () => {
    expect(enhancer.succeed({
        name: "Liverto",
        enhancement: 15,
        durability: 50
    })).toEqual({
        name: "Liverto",
        enhancement: 16,
        durability: 50
    })
})

it('success enhancement stays at 20', () => {
    expect(enhancer.succeed({
        name: "Liverto",
        enhancement: 20,
        durability: 50
    })).toEqual({
        name: "Liverto",
        enhancement: 20,
        durability: 50
    })
})

it('fail enhancement less than 15 = durability -5', () => {
    expect(enhancer.fail({
        name: "Yuria",
        enhancement: 14,
        durability: 70
    })).toEqual({
        name: "Yuria",
        enhancement: 14,
        durability: 65
    })
})

it('avoid negative number', () => {
    expect(enhancer.fail({
        name: "Yuria",
        enhancement: 14,
        durability: 4
    })).toEqual({
        name: "Yuria",
        enhancement: 14,
        durability: 0
    })
})

it('fail enhancement 15 or 16 = durability +10', () => {
    expect(enhancer.fail({
        name: "Yuria",
        enhancement: 15,
        durability: 70
    })).toEqual({
        name: "Yuria",
        enhancement: 15,
        durability: 60
    })
})

it('fail enhancement >16 = enhancement -1', () => {
    expect(enhancer.fail({
        name: "Yuria",
        enhancement: 17,
        durability: 70
    })).toEqual({
        name: "Yuria",
        enhancement: 16,
        durability: 70
    })
})