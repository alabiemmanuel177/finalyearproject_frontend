import React from 'react'

function PeopleCard({ name, role }) {
    return (
        <div className='peoplelistcard' style={{ padding: '0 5px',display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '12px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', }}>
                <div style={{ height: '36px', width: '36px', marginRight: '15px' }}>
                    <img style={{ height: '100%', width: '100%' }} src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="AVATAR" />
                </div>
                <h6 style={{ margin: 0 }}>{name}</h6>
            </div>
            {
                role && (
                <div style={{ width: '100px', backgroundColor: 'lightblue', padding: '8px 15px', display: 'grid', placeContent: 'center' }}>
                    <h6 style={{ margin: 0, color: '#0a3697', fontSize: '0.9rem' }}>{role}</h6>
                </div>
                )
            }
        </div>
    )
} 

function People() {
  return (
    <div className='peoplecontainer' style={{ height: '100%', padding: '15px 20px'}}>
        <div className="peoplelecturercontainer" style={{ margin: ' 0 0 25px 0' }}>
            <div className='pcontainerhead' style={{ padding: '8px 0px', borderBottom: '2px solid #0a3697' }}>
                <h5 style={{ fontWeight: 'bold' }}>Lecturer</h5>
            </div>
            <div className='pcontainerlist' style={{ paddingLeft: '0px' }}>
                <PeopleCard name={'Dr Adetofunmi Adetunji'} role={'Facilitator'} />
                <PeopleCard name={'Dr Adetofunmi Adetunji'} role={'Tutor'} />
            </div>
        </div>
        <div className="peoplestudentcontainer" style={{ padding: '8px 0px', }}>
            <div className='pcontainerhead' style={{ padding: '8px 0px', borderBottom: '2px solid #0a3697' }}>
                <h5 style={{ fontWeight: 'bold' }}>Students</h5>
            </div>
            <div className='pcontainerlist' style={{ height: '28vh', overflow: 'hidden scroll' }}>
                <PeopleCard name={'Izu Onisokumen Preye'} role={'You'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
                <PeopleCard name={'Izu Onisokumen Preye'} />
            </div>
        </div>
    </div>
  )
}

export default People