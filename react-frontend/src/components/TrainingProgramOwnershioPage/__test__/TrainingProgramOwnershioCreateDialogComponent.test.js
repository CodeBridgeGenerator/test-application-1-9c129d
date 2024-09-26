import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingProgramOwnershioCreateDialogComponent from "../TrainingProgramOwnershioCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingProgramOwnershio create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingProgramOwnershioCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingProgramOwnershio-create-dialog-component")).toBeInTheDocument();
});
