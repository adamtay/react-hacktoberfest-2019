import React from 'react';

import { Container, Alert, Button, Form } from 'react-bootstrap';

function AucklandPage() {
    return (
        <Container>
            <Alert variant="primary">This page is for Auckland</Alert>
            <div className="auckland-page">
                Auckland (/ˈɔːklənd/ AWK-lənd) is a city in the North Island of
                New Zealand. The most populous urban area in the country,
                Auckland has an urban population of around 1,628,900 (June
                2018).[4] It is located in the Auckland Region—the area governed
                by Auckland Council—which includes outlying rural areas and the
                islands of the Hauraki Gulf, resulting in a total population of
                1,695,900.[4] Auckland is a diverse, multicultural and
                cosmopolitan city, home to the largest Polynesian population in
                the world.[5] A Māori-language name for Auckland is Tāmaki
                ([ˈtaːmaki]) or Tāmaki Makaurau, meaning Tāmaki with a hundred
                lovers, in reference to the desirability of its fertile land at
                the hub of waterways in all directions.[6]
            </div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        Well never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default AucklandPage;
