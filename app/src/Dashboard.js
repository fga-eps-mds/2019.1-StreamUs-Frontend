import React, { Component } from "react";
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title, Text } from "native-base";
import { StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#191414',
    },
    title: {
        fontSize: "2.25em",
        fontFamily: "Arial"
    },
    container: {
        backgroundColor: '#2F2B2B',
    },
    grid: {
        margin: 15,
        marginRight: 40,
        marginLeft: 40
    },
    gridCol: {
        backgroundColor: '#1DB954',
        height: "100%",
        margin: "2%",
        borderRadius: 25,
    },
    gridColTexT: {
        textAlign: "center",
        color: "#FFFFFF",
        fontSize: "2.25em",
        fontFamily: "Arial",
        padding: "25%"
    }
});

export default class Dashboard extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>

                    </Left>
                    <Body>
                        <Title style={styles.title}>Dashboard</Title>
                    </Body>
                    <Right>
                        <Button>
                            <Icon name="rocketdots-vertical" />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Grid style={styles.grid}>
                        <Col style={styles.gridCol} onPress={() => { }}>
                            <Text style={styles.gridColTexT}>
                                Criar Sala
                            </Text>
                        </Col>
                        <Col style={styles.gridCol} onPress={() => { }} >
                            <Text style={styles.gridColTexT}>
                                Administrar Sala
                            </Text>
                        </Col>
                    </Grid>
                </Content>
            </Container>
        );
    }
}