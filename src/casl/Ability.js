import { Ability, AbilityBuilder } from '@casl/ability';

// Defines how to detect object's type
function subjectName(item) {
    if (!item || typeof item === 'string') {
        return item;
    }
    return item.__type;
}

const ability = new Ability([], { subjectName });

/*  Using Casl, you can basically change Visibility of components, defined by some 
    conditions. Like, for example, what content to show if a person is a normal user
    or he is an admin. */
export function defineUserRules() {
    const admin = true;
    const { can, rules } = new AbilityBuilder();

    if (admin) {
        can('view', ['Dashboard', 'Introduction']);
        can('drink', ['coffee', 'tea']);
    } else {
        can('view', 'Dashboard');
        can('drink', 'tea');
    }
    return rules;
}

ability.update(defineUserRules());

export default ability;
