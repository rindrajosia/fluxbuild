import universitiesReducer, { initialState, fetchAllUniversities, getUniversitiesError, getUniversitiesStatus } from '../../reducers/universities/universityReducer';
import { fetchUniversityLoading, fetchUniversitySuccess, fetchUniversityError } from '../../actions/universityAction';
import { store } from '../../store/store'
import * as api from '../../services/universities'

jest.mock('../../services/universities', () => {
  return {
    async getAll(name) {
      const fakeData = [
        { "id": 1, "state-province": null, "domains": ["hmc.edu", "hmc.md"], "name": "Harvey Mudd College", "country": "United States", "web_pages": ["http://www.hmc.edu/"], "alpha_two_code": "US" },
        { "id": 2, "state-province": null, "domains": ["harvard.edu"], "name": "Harvard University", "country": "United States", "web_pages": ["http://www.harvard.edu/"], "alpha_two_code": "US" },
        { "id": 3, "state-province": "Ontario", "domains": ["uottawa.ca"], "name": "University of Ottawa", "country": "Canada", "web_pages": ["http://www.uottawa.ca/"], "alpha_two_code": "CA" }
      ];

      return fakeData.filter(university => (university['name'].toLowerCase()).includes(name.toLowerCase()));
    }
  }
})

test("Find university by name should work", async() => {
  await api.getAll("Har")
})

describe('Selector', () => {
  describe('Fetch universities', () => {
    it('It should return no university', () => {
      const universities = {
        isLoading: false,
        universities: [],
        error: ''
      }
      const result = fetchAllUniversities({universities});
      expect(result.length).toEqual(0);
    });

    it('It should return 2 university', () => {
      const universities = {
        isLoading: false,
        universities: [
          { "id": 1, "state-province": null, "domains": ["hmc.edu", "hmc.md"], "name": "Harvey Mudd College", "country": "United States", "web_pages": ["http://www.hmc.edu/"], "alpha_two_code": "US" },
          { "id": 2, "state-province": null, "domains": ["harvard.edu"], "name": "Harvard University", "country": "United States", "web_pages": ["http://www.harvard.edu/"], "alpha_two_code": "US" },
        ],
        error: ''
      }
      const result = fetchAllUniversities({universities});
      expect(result.length).toEqual(2);
    });

  });
})


describe('universitiesReducer ', () => {
  it('should return the initial state', () => {
    const actual = universitiesReducer(undefined, {});
    const expected = initialState;
    expect(actual).toEqual(expected);
  });

  it('fetchUniversityLoading action should work', () => {
    const state = { ...initialState, isLoading: false };
    const actual = universitiesReducer(state, fetchUniversityLoading());
    const expected = { ...initialState, isLoading: true };
    expect(actual).toEqual(expected);
  });

  it('fetchUniversityLoading action should not work', () => {
    const state = { ...initialState, isLoading: false };
    const actual = universitiesReducer(state, fetchUniversityLoading());
    const expected = { ...initialState, isLoading: false };
    expect(actual).not.toEqual(expected);
  });

  it('fetchUniversitySuccess action should work', () => {
    const state = { ...initialState, isLoading: true, error: '404 Page not fonud' };
    const universities = [
      { "id": 1, "state-province": null, "domains": ["hmc.edu", "hmc.md"], "name": "Harvey Mudd College", "country": "United States", "web_pages": ["http://www.hmc.edu/"], "alpha_two_code": "US" },
      { "id": 2, "state-province": null, "domains": ["harvard.edu"], "name": "Harvard University", "country": "United States", "web_pages": ["http://www.harvard.edu/"], "alpha_two_code": "US" },
      { "id": 3, "state-province": "Ontario", "domains": ["uottawa.ca"], "name": "University of Ottawa", "country": "Canada", "web_pages": ["http://www.uottawa.ca/"], "alpha_two_code": "CA" }
    ];
    const actual = universitiesReducer(state, fetchUniversitySuccess(universities));

    expect(actual.universities.length).toEqual(universities.length);
  });

  it('fetchUniversitySuccess action should not work', () => {
    const state = { ...initialState, isLoading: true, error: '404 Page not fonud' };
    const universities = [
      { "id": 1, "state-province": null, "domains": ["hmc.edu", "hmc.md"], "name": "Harvey Mudd College", "country": "United States", "web_pages": ["http://www.hmc.edu/"], "alpha_two_code": "US" },
      { "id": 2, "state-province": null, "domains": ["harvard.edu"], "name": "Harvard University", "country": "United States", "web_pages": ["http://www.harvard.edu/"], "alpha_two_code": "US" },
      { "id": 3, "state-province": "Ontario", "domains": ["uottawa.ca"], "name": "University of Ottawa", "country": "Canada", "web_pages": ["http://www.uottawa.ca/"], "alpha_two_code": "CA" }
    ];
    const actual = universitiesReducer(state, fetchUniversitySuccess(universities));

    expect(actual.universities.length).not.toEqual([].length);
  });

  it('fetchUniversityError action should work', () => {
    const state = { ...initialState, isLoading: true, universities: ["Harvey"] };
    const error = '404 Page not fonud';
    const actual = universitiesReducer(state, fetchUniversityError(error));
    const expected = { ...initialState, error: '404 Page not fonud' };
    expect(actual).toEqual(expected);
  });

  it('fetchUniversityError action should not work', () => {
    const state = { ...initialState, isLoading: true, universities: ["Harvey"] };
    const error = '404 Page not fonud';
    const actual = universitiesReducer(state, fetchUniversityError(error));
    const expected = { ...initialState, error: '' };
    expect(actual).not.toEqual(expected);
  });


});
