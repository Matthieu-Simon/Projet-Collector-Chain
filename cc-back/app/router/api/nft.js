const express = require('express');

const router = express.Router();

const nftController = require('../../controllers/nftController');
const controllerHandler = require('../../helper/controllerHandler');

/**
 * GET /nft
 * @summary Route to nft
 * @tags nft
 * @param {string} tableName - table name nft
 * @return {Object} 200 - success response - application/json
 */
router.get('/nft', controllerHandler(nftController.getNft));
/**
 * GET /nft/:id
 * @summary Route to nft by id
 * @tags nft
 * @param {id} id - nft by id
 * @return {string} 200 - success response - application/json
 */
router.get('/:id/nft', controllerHandler(nftController.getNftById));
/**
 * POST /:id/nft
 * @summary Route to post nft
 * @tags nft
 * @param {Nft} Nft - Nft Model Object
 * @return {Object} 200 - success response - application/json
 */
router.post('/:id/nft', controllerHandler(nftController.createNft));
/**
 * DELETE /nft/:id/delete
 * @summary Route to delete nft
 * @tags nft
 * @param {number} id - nft by id
 * @return {string} 200 - success response - application/json
 */
router.delete('/nft/:id/delete', controllerHandler(nftController.deleteNft));
/**
 * UPDATE /:id/nft/update
 * @summary Route to update nft
 * @tags nft
 * @param {Nft} Nft - Nft Model Object
 * @return {Object} 200 - success response - application/json
 */
router.patch('/:id/nft/update', controllerHandler(nftController.updateNft));
/**
 * GET /collections/:id/nft
 * @summary Route to collection by nft_id
 * @tags nft
 * @param {number} id - nft by id
 * @return {Object} 200 - success response - application/json
 */
router.get('/collections/:id/nft', controllerHandler(nftController.getNftByCollectionId));
/**
 * GET /:id/nft
 * @summary Route to nft by user
 * @tags nft
 * @param {number} id - nft by id
 * @return {Object} 200 - success response - application/json
 */
router.get('/:id/nft', controllerHandler(nftController.getNftByUserId));

module.exports = router;
