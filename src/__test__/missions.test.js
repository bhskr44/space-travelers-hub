import { render, screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import MissionPage from '../__mocks__/MissionPage';

jest.mock('react-redux');

const mockDispatch = jest.fn();
const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');


beforeAll(() => {
  reactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
});

describe('Test for Missions Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render the Missions Page', async () => {
    const missionsObj = [
      {
        mission_name: 'Thaicom',
        mission_id: '9D1B7E0',
        manufacturers: ['Orbital ATK'],
        payload_ids: ['Thaicom 6', 'Thaicom 8'],
        wikipedia: 'https://en.wikipedia.org/wiki/Thaicom',
        website: 'http://www.thaicom.net/en/satellites/overview',
        twitter: 'https://twitter.com/thaicomplc',
        description: `Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology`,
      },
    ];

    const tree = render(<MissionPage missionsObj={missionsObj} />);
    expect(tree).toMatchSnapshot();
  });

 
});
