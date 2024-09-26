import React from "react";
import { render, screen } from "@testing-library/react";

import TrainingProgramOwnershioPage from "../TrainingProgramOwnershioPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders trainingProgramOwnershio page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <TrainingProgramOwnershioPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("trainingProgramOwnershio-datatable")).toBeInTheDocument();
    expect(screen.getByRole("trainingProgramOwnershio-add-button")).toBeInTheDocument();
});
