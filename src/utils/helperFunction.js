export const createSequenceFromRoles = (roles, duration) => {
    const sequence = [];
    roles.forEach((role) => {
        sequence.push(role, duration);
    });
    return sequence
}