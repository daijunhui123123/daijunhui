let parent =
{
    name: 'parent',
    friends: ['child1', 'child2'],

    age() {
        return 65
    }
}

let child = Object.create(parent)
let child1 = Object.create(parent)
child.friends.push('child3')