/**
 * Extend the base Actor entity by defining a custom roll data structure which is ideal for the Simple system.
 * @extends {Actor}
 */
export class Midgard5Actor extends Actor {

  /**
   * Augment the basic actor data with additional dynamic data.
   */
  prepareData() {
    super.prepareData();

    const actorData = this.data;
    const data = actorData.data;
    const flags = actorData.flags;

    // Make separate methods for each Actor type (character, npc, etc.) to keep
    // things organized.
    if (actorData.type === 'character') this._prepareCharacterData(actorData);
  }

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData) {
    const data = actorData.data;

    // Make modifications to data here. For example:

    // Loop through ability scores, and add their modifiers to our sheet output.
    for (let [key, ability] of Object.entries(data.abilities)) {
     // Calculate the modifier using d20 rules.
    if (ability.value <= 5) {
      ability.mod = -2;
      } else if (ability.value <= 20) {
      ability.mod = -1;
      } else if (ability.value <= 90) {
      ability.mod = 0;
      } else if (ability.value <= 95) {
      ability.mod = 1;
      } else if (ability.value > 95) {
      ability.mod = 2;
      } else {
      console.log('Error, wrong value')
      }
    }
  }

}