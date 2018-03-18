function deleteCatSwallowError(catId) {
    database
        .delete('cats', catId)
        .then(() => console.log('Cat deleted'))
        .catch(err => console.error('Error deleting cat', err));
}

//better do this:

function deleteCat(catId) {
    return database.delete('cats', catId);
}

function deleteButtonClickHandler(e) {
    const catId = e.target.data['cat-id'];
    deleteCat(catId)
        .then(() => removeItemElementFromPage(catId))
        .catch(err =>
            showMessageDialog(
                'item ' + getCatName(catId) + 'was not deleted'))
}