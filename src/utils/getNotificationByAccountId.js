import decodeOpaqueId from "@reactioncommerce/api-utils/decodeOpaqueId.js";

/**
 *
 * @method getNotificationByAccountId
 * @summary Get all of a Unit's Variants or only a Unit's top level Variants.
 * @param {Object} context - an object containing the per-request state
 * @param {String} unitOrVariantId - A Unit or top level Unit Variant ID.
 * @param {Boolean} topOnly - True to return only a units top level variants.
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {Boolean} args.shouldIncludeHidden - Include hidden units in results
 * @param {Boolean} args.shouldIncludeArchived - Include archived units in results
 * @returns {Promise<Object[]>} Array of Unit Variant objects.
 */
export default async function getNotificationByAccountId(context) {
  const { collections } = context;
  const { Notifications } = collections;
  let accountId = context.userId;
  console.log("accountId", accountId);
  let notifications = await Notifications.find({ to: accountId }).sort({"timeSent":-1}).toArray();
  return notifications;
}
