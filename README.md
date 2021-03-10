# VSMALL


## Description<br>
VSMALL is a tool which webscapes clothes from various webstores and puts them into one place to make shopping easier.
The project currently works for mens clothes from Hollister, Uniqlo, and Under Amour.
The project was made using REACT for the frontend and python for the back end. Mongo DB was used as the database to store everything<br><br>

## Development Environment Setup <br>
### Python Dependencies: <br>
pip install -r requirements.txt <br>
### REACT Dependencies <br>
npm install <br>
### Running Backend <br>
If virtual environment is not installed: <br>
python3 -m venv venv <br> 
Running Everything: <br>
. venv/bin/activate <br>
export FLASK_APP=vsmall_backend.py <br>
export FLASK_ENV=development<br>
python3 -m flask run <br>
### Running Frontend <br>
npm start <br> <br> <br>


Setting up/ runnung style plugins for Python:
1. pip3 install pycodestyle
2. To run do: pycodestyle --first <fileName> 

Style guide: https://www.python.org/dev/peps/pep-0008/ <br>

Setting up/ running style plugins for React:<br>
npm install eslint --save-dev <br>
npx eslint --init <br>
npm install --save husky lint-staged prettier <br>
npx eslint <your file> <br>

Style guide: https://github.com/standard/standard
