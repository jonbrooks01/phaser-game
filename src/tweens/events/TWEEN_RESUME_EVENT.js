/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2022 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Tween Resume Event.
 *
 * This event is dispatched by a Tween when it is resumed from a paused state.
 *
 * Listen to it from a Tween instance using `Tween.on('resume', listener)`, i.e.:
 *
 * ```javascript
 * var timeline = this.tweens.timeline({
 *     targets: image,
 *     ease: 'Power1',
 *     duration: 3000,
 *     tweens: [ { x: 600 }, { y: 500 }, { x: 100 }, { y: 100 } ]
 * });
 * timeline.on('resume', listener);
 * // At some point later ...
 * timeline.resume();
 * ```
 *
 * @event Phaser.Tweens.Events#TWEEN_RESUME
 * @since 3.60.0
 *
 * @param {Phaser.Tweens.Tween} tween - A reference to the Tween instance that emitted the event.
 */
module.exports = 'resume';