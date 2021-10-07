module.exports = {
    "testMatch": ["**/__tests__/**/*.[jt]s?(x)"],
    "moduleFileExtensions": [
        "js",
        "json",
        "vue"
    ],
    "transform": {
        ".*\\.(vue)$": "vue-jest",
        ".*\\.(js)$": "babel-jest"
    }
}