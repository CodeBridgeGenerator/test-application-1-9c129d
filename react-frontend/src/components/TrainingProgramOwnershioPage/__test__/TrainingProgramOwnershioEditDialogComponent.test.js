import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingProgramOwnershioEditDialogComponent from "../TrainingProgramOwnershioEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingProgramOwnershio edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingProgramOwnershioEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingProgramOwnershio-edit-dialog-component")).toBeInTheDocument();
});
