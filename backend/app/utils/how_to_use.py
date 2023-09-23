from app.utils.autocorrect import AutoCorrector
from app.utils.autocomplete import AutoCompleter

completer = AutoCompleter()
corrector = AutoCorrector()

def correction(query : str) -> str:
    query = corrector(query)
    return query