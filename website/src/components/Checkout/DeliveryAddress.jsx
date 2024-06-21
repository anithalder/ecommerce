import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { data } from 'autoprefixer';

const DeliveryAddress = () => {

  const handleSubmit = (e) => {
    console.log('submitted');
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const address = {
      firstName: data.get('firstName')
    }
    console.log(data)
  }

  return (
    <div className=''>
      <Grid container spacing={4}>
        <Grid xs={12} sm={5} item
          className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'
        >
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard />
            <Button
              sx={{ mt: 2, fontSize: 16, fontWeight: 'bold', bgcolor: '#03424C' }} size='large'
              variant='contained'
              type='submit'
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>

          <Box className='border rounded-s-md shadow-md p-5'>

            <form onSubmit={(e)=>handleSubmit(e)}>

              <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>

                  <TextField
                    required
                    id='firstName'
                    name='firstName'
                    label='First Name'
                    fullWidth
                    autoComplete='given-name'
                  />

                </Grid>

                <Grid item xs={12} sm={6}>

                  <TextField
                    required
                    id='lastName'
                    name='lastName'
                    label='Last Name'
                    fullWidth
                    autoComplete='given-name'
                  />

                </Grid>

                <Grid item xs={12}>

                  <TextField
                    required
                    id='address'
                    name='address'
                    label='Address'
                    fullWidth
                    multiline
                    rows={4}
                    autoComplete='given-name'
                  />

                </Grid>

                <Grid item xs={12} sm={6}>

                  <TextField
                    required
                    id='city'
                    name='city'
                    label='City'
                    fullWidth
                    autoComplete='given-name'
                  />

                </Grid>

                <Grid item xs={12} sm={6}>

                  <TextField
                    required
                    id='state'
                    name='state'
                    label='State / Province / Region'
                    fullWidth
                    autoComplete='shippig postal-code'
                  />

                </Grid>

                <Grid item xs={12} sm={6}>

                  <TextField
                    required
                    id='zipcode'
                    name='zipcode'
                    label='Zip / Postal Code'
                    fullWidth
                    autoComplete='given-name'
                  />

                </Grid>

                <Grid item xs={12} sm={6}>

                  <TextField
                    required
                    id='phoneNo'
                    name='phonrNo'
                    label='Phone No.'
                    fullWidth
                    autoComplete='given-name'
                  />

                </Grid>

                <Grid item xs={12} sm={6}>

                  <Button
                    sx={{
                      py: 1.5,
                      mt: 2,
                      fontSize: 16,
                      fontWeight: 'bold',
                      bgcolor: '#03424C'
                    }}
                    size='large'
                    variant='contained'
                    type='submit'
                  >
                    Deliver Here
                  </Button>

                </Grid>

              </Grid>

            </form>

          </Box>

        </Grid>
      </Grid>
    </div>
  );
}

export default DeliveryAddress;
