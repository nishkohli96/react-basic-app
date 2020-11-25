import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';

export default function FixedContainer() {
    const [sheetOpen, setBtmSheetOpen] = useState(false);

    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Typography
                    component="div"
                    style={{ backgroundColor: '#cfe8fc', height: '100px' }}
                >
                    Inside Container
                    <div style={{ backgroundColor: 'pink', color: '#FFFFFF' }}>
                        Inside the pink Container
                    </div>
                    <Button
                        onClick={() => setBtmSheetOpen(true)}
                        style={styles.btn}
                    >
                        Open Bottom Sheet
                    </Button>
                </Typography>
            </Container>

            <SwipeableBottomSheet
                open={sheetOpen}
                onChange={() => setBtmSheetOpen(false)}
                style={styles.sheetBody}
            >
                <div style={styles.container}>
                    <div style={styles.title}>Bottom Sheet Content</div>
                    <p>Enter more content here...</p>
                </div>
            </SwipeableBottomSheet>
        </React.Fragment>
    );
}

const styles = {
    title: {
        backgroundColor: '#00bcd4',
        padding: '16px 0',
        boxSizing: 'border-box',
        color: 'white',
        marginBottom: 10,
        fontSize: '20px',
        textAlign: 'center',
    },
    sheetBody: {
        zIndex: 2, // increase as per need
        backgroundColor: 'palevioletred',
    },
    container: {
        paddingBottom: 30,
        height: 250,
    },
    btn: {
        backgroundColor: '#006699',
        marginTop: 20,
        color: 'white',
    },
};
