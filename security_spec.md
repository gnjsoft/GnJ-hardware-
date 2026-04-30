# Security Specification for HardwareNexus (Firestore)

## 1. Data Invariants
- **Products**: Read-only for all users (including guest). Create/Update/Delete strictly restricted to `Admin` or `Sales` roles.
- **Users**: Users can only read and write their own profile (`/users/{uid}`). Role escalation is blocked (cannot change own `role` or `creditLimit`).
- **Orders**: Users can create orders. Once created, only `Admin` or `Sales` can update the status. Users can only read their own orders.
- **RFQ**: Only users with `business` role can create RFQs. Users can only read their own RFQs.

## 2. The "Dirty Dozen" Payloads (Denial Expected)
1. **Identity Theft**: Auth user B attempts to write to `/users/userA`.
2. **Privilege Escalation**: User A attempts to update their own role from `consumer` to `admin`.
3. **Price Manipulation**: User A creates an order with a `total` of ₹1 for a ₹5,00,000 product.
4. **Ghost Field**: User A adds `isVerified: true` to their profile.
5. **Unauthorized Catalog Edit**: Consumer attempts to change a product price.
6. **Orphaned Order**: Create an order for a non-existent `userId`.
7. **B2C RFQ Injection**: Consumer (non-business) attempts to create an RFQ.
8. **Invalid ID Poisoning**: Write a product with a 2KB ID string.
9. **Bulk Pricing Wipe**: Admin attempts an update that accidentally deletes the `bulkPricing` array (schema validation failure).
10. **State Skipping**: Consumer attempts to move an order status from `pending` to `delivered`.
11. **PII Leak**: Guest user attempts to list all documents in `/users`.
12. **Denial of Wallet**: Infinite recursive list call on a deep subcollection (prevented by max depth and explicit list rules).

## 3. Test Cases (Firestore Rules)
Rules will be verified against these scenarios using `firestore.rules.test.ts`.
