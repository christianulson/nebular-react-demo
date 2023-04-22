import { Accordion } from '@nebular-react/core';
import React from 'react';

export function AccordionDemo() {
  return (
    <div className="row">
      <div className="col-md-12 col-lg-6 col-xxxl-6">
        <h4>Single</h4>
        <Accordion>
          <Accordion.Item
            value="Product Details"
            header={<Accordion.Item.Header>Product Details</Accordion.Item.Header>}
            body={
              <Accordion.Item.Body>
                A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
                Originally, nebula was a name for any diffuse astronomical object, including
                galaxies beyond the Milky Way.
              </Accordion.Item.Body>
            }
          />
          <Accordion.Item
            value="Reviews"
            header={<Accordion.Item.Header>Reviews</Accordion.Item.Header>}
            body={
              <Accordion.Item.Body>
                A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
                Originally, nebula was a name for any diffuse astronomical object, including
                galaxies beyond the Milky Way.
              </Accordion.Item.Body>
            }
          />
          <Accordion.Item
            value="Edit"
            disabled
            header={<Accordion.Item.Header>Edit</Accordion.Item.Header>}
            body={
              <Accordion.Item.Body>
                A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
                Originally, nebula was a name for any diffuse astronomical object, including
                galaxies beyond the Milky Way.
              </Accordion.Item.Body>
            }
          />
        </Accordion>
      </div>

      <div className="col-md-12 col-lg-6 col-xxxl-6">
        <h4>Multiple</h4>
        <Accordion<true> multiple expanded={['Product Details']}>
          <Accordion.Item
            value="Product Details"
            header={<Accordion.Item.Header>Product Details</Accordion.Item.Header>}
            body={
              <Accordion.Item.Body>
                A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
                Originally, nebula was a name for any diffuse astronomical object, including
                galaxies beyond the Milky Way.
              </Accordion.Item.Body>
            }
          />
          <Accordion.Item
            value="Reviews"
            header={<Accordion.Item.Header>Reviews</Accordion.Item.Header>}
            body={
              <Accordion.Item.Body>
                A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
                Originally, nebula was a name for any diffuse astronomical object, including
                galaxies beyond the Milky Way.
              </Accordion.Item.Body>
            }
          />
          <Accordion.Item
            value="Edit"
            header={<Accordion.Item.Header>Edit</Accordion.Item.Header>}
            body={
              <Accordion.Item.Body>
                A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases.
                Originally, nebula was a name for any diffuse astronomical object, including
                galaxies beyond the Milky Way.
              </Accordion.Item.Body>
            }
          />
        </Accordion>
      </div>
    </div>
  );
}
