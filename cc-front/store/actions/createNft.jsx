export const STORE_TEMP_PICTURE = 'STORE_TEMP_PICTURE';
export const STORE_PROPERTY = 'STORE_PROPERTY';
export const DELETE_PROPERTY = 'DELETE_PROPERTY';
export const STORE_NFT_MEDIA = 'STORE_NFT_MEDIA';
export const DELETE_NFT_MEDIA = 'DELETE_NFT_MEDIA';
export const STORE_DESCRIPTION = 'STORE_DESCRIPTION';
export const STORE_CATEGORY = 'STORE_CATEGORY';
export const CHANGE_NFT_FIELD = 'CHANGE_NFT_FIELD';

export const changeNftField = (value,name) => ({
  type: CHANGE_NFT_FIELD,
  value,
  name
});

export const storeCategory = (payload) => ({
  type: STORE_CATEGORY,
  payload
});

export const deleteNftMedia = () => ({
  type: DELETE_NFT_MEDIA
});

export const storeNftMedia = (payload) => ({
  type: STORE_NFT_MEDIA,
  payload
});

export const deleteProperty = (property) => ({
  type: DELETE_PROPERTY,
  property
});

export const storeProperty = (property,tag) => ({
  type: STORE_PROPERTY,
  property,
  tag
});

export const storeTempPicture = (payload) => ({
  type: STORE_TEMP_PICTURE,
  payload
});