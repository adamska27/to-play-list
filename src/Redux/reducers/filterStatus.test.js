import filterStatus from './filterStatus'

it('return initial state to be "all"', () => {
    expect(filterStatus('all', {type: ''})).toBe('all')
})

it('status filter played', () => {
    expect(filterStatus('all', {type: 'FILTER_MYGAMES', filterStatus: 'played'})).toBe('played')
})

it('status filter to play', () => {
    expect(filterStatus('all', {type: 'FILTER_MYGAMES', filterStatus: 'to play'})).toBe('to play')
})

it('status filter all', () => {
    expect(filterStatus('all', {type: 'FILTER_MYGAMES', filterStatus: 'all'})).toBe('all')
})